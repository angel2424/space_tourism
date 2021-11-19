import logo from '../images/shared/logo.svg'
import DeskNav from './navbar/DeskNav'
import MobileNav from './navbar/MobileNav'

const Header = () => {
    return ( 
        <header className="header">
            <img className="header__logo" src={logo} alt="Space travel agency logo" />
            {window.innerWidth < 600 ? <MobileNav /> : <DeskNav />}
        </header>
    );
}
 
export default Header;