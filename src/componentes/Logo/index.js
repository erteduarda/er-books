import logo from '../../imagens/logo.svg'
import './estilo.css'
function Logo() {
    return (
        <div className='logo' alt='logo'>
            <img
                src={logo}
                className='logo-img'
            ></img>
            <p>
                <strong>Er</strong>-Books
            </p>
        </div>
    )
}

export default Logo;