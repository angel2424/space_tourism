import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const DeskNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const path = useLocation().pathname;
  const location = path.split("/")[1];

  useEffect(() => {
    if (location) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <>
      <div
        onClick={handleClick}
        className={`mobile__hamburger ${isOpen ? "open" : ""}`}
      >
        <span className="mobile__bar"></span>
        <span className="mobile__bar"></span>
        <span className="mobile__bar"></span>
      </div>
      <div className={`header__nav ${isOpen ? "" : "slide"}`}>
        <NavLink
          activeClassName="nav__item--active"
          className="nav__item"
          exact
          to="/"
        >
          <span>00</span> Home{" "}
        </NavLink>
        <NavLink
          activeClassName="nav__item--active"
          className="nav__item"
          to="/destination"
        >
          <span>01</span> Destination{" "}
        </NavLink>
        <NavLink
          activeClassName="nav__item--active"
          className="nav__item"
          to="/crew"
        >
          <span>02</span> Crew{" "}
        </NavLink>
        <NavLink
          activeClassName="nav__item--active"
          className="nav__item"
          to="/technology"
        >
          <span>03</span> Technology{" "}
        </NavLink>
      </div>
    </>
  );
};

export default DeskNav;
