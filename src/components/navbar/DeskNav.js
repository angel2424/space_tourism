import { NavLink } from "react-router-dom";

const DeskNav = () => {
    return ( 
        <div className="header__nav">
            <NavLink activeClassName="nav__item--active" className="nav__item" exact to="/space_tourism"><span>00</span> Home </NavLink>
            <NavLink activeClassName="nav__item--active" className="nav__item" to="/destination"><span>01</span> Destination </NavLink>
            <NavLink activeClassName="nav__item--active" className="nav__item" to="/crew"><span>02</span> Crew </NavLink>
            <NavLink activeClassName="nav__item--active" className="nav__item" to="/technology"><span>03</span> Technology </NavLink>
        </div>
    );
}
 
export default DeskNav;