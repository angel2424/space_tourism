import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MobileNav = ({clickToggle}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const path = useLocation().pathname;
    const location = path.split('/')[1];

    useEffect(() => {
        if(location === location) {
            setIsOpen(false)
        }
    },[location])

    return ( 
        <>
            <div onClick={handleClick} className={`mobile__hamburger ${isOpen ? 'open' : ''}`} >
                <span className="mobile__bar"></span>
                <span className="mobile__bar"></span>
                <span className="mobile__bar"></span>
            </div>
            <div className={`mobile_menu ${isOpen ? '' : 'slide'} `}>
                <NavLink className="nav__item" activeClassName="nav__item--active" exact to="/"><span>00</span> Home </NavLink>
                <NavLink className="nav__item" activeClassName="nav__item--active" to="/destination"><span>01</span> Destination </NavLink>
                <NavLink className="nav__item" activeClassName="nav__item--active" to="/crew"><span>02</span> Crew </NavLink>
                <NavLink className="nav__item" activeClassName="nav__item--active" to="/technology"><span>03</span> Technology </NavLink>
            </div>
        </>
    );
}
 
export default MobileNav;