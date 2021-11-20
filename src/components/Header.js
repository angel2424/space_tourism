import logo from '../images/shared/logo.svg'
import DeskNav from './navbar/DeskNav'

const Header = () => {
    return ( 
        <header className="header">
            <img className="header__logo" src={logo} alt="Space travel agency logo" />
            <DeskNav />
        </header>
    );
}
 
export default Header;