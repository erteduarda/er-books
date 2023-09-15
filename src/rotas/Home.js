import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components'

const AppContainer = styled.div`
        width: 100vw;
        height: 100vw;
        background-image: linear-gradient(90deg, #002F52, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
