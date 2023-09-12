import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos, deletarFavoritos } from '../servicos/favoritos'

const AppContainer = styled.div`
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(90deg, #002F52, #326589);
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
        <p onClick={() => deletarFavorito(favorito.id)}>{favorito.nome}</p>
      ))}
    </AppContainer>
  );
}

export default Favoritos;
