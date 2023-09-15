
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
            background-color: #FFF;
            display: flex;
            justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link 
                style={{textDecoration: 'none', color: 'black'}} 
                to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;