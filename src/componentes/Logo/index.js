import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
        display: flex;
        font-size: 30px;
`
const Imagem = styled.img`
        margin-right: 10px;
        margin-left: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <Imagem
                src={logo} F
            ></Imagem>
            <p>
                <strong>Er</strong>-Books
            </p>
        </LogoContainer>
    )
}

export default Logo;