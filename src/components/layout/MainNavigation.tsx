import React from 'react';
import { Link, NavLink } from "react-router-dom";
import CartButton from '../cart/CartButton';

import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  const isActive = (navData: any) => navData.isActive ? classes.active : ''

  return (
    <header className={classes.header}>
      <Link to="/shop">
        <div className={classes.logo}>ReactStore</div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={isActive} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartButton />
    </header>
  );
}

export default MainNavigation