import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos, deletarFavoritos } from '../servicos/favoritos'
import imagemLivro from '../imagens/livro.png'

const AppContainer = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 100vw;
    width: 100%;
`

const Lista = styled.div`
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

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deletarFavoritos(id)
    fetchFavoritos()
    alert(`Livro de id: ${id} deletado da lista de favoritos`)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>

      {favoritos.map(favorito => (
        <Lista>
          <img src={imagemLivro}></img>
          <p onClick={() => deletarFavorito(favorito.id)}>
            {favorito.nome}
          </p>
        </Lista>
      ))}

    </AppContainer>
  );
}

export default Favoritos;
