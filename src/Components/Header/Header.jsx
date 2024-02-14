import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import MonsterList from "../MonsterList/MonsterList.jsx";
import { NavLink as RouterLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  const { logo, navItems } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const itemList = navItems.map((item) => {
    return (
      <NavItem key={item.url} className={style.navItem}>
        <RouterLink
          exact={item.exact}
          activeClassName={style.activeNavLink}
          to={item.url}
          className="nav-link"
        >
          {item.text}
        </RouterLink>
      </NavItem>
    );
  });

  return (
    <div className={style.navBar}>
      <Navbar color="faded" light expand="md">
        <NavbarBrand>
          <RouterLink to="/">
            <img className={style.logo} src={logo} alt="" />
          </RouterLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`ms-auto ${style.navItemsContainer}`} navbar>
            {itemList}
            <NavItem>
              <MonsterList></MonsterList>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
