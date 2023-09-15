import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import { getLivros } from '../../servicos/livros';
import { postFavoritos } from '../../servicos/favoritos';
import imagemLivro from '../../imagens/livro.png'

const PesquisaContainer = styled.div`
            background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
            color: #FFF;
            text-align: center;
            padding: 85px 0;
            height: auto;
            width: 100%;
`
const Titulo = styled.h1`
            color: #FFF;
            font-size: 36px;
            text-align: center;
            width: 100%;
`
const SubTitulo = styled.h2`
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`
function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);
    const [qtdLivros, setQtdLivros] = useState(0);

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
        setQtdLivros(livrosDaAPI.length)
    }

    async function inserirFavorito(id) {
        await postFavoritos(id)
        alert(`Livro de id:${id} inserido!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder='Escolha sua próxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado onClick={() => inserirFavorito(livro.id)}>
                    <img src={imagemLivro}></img>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;