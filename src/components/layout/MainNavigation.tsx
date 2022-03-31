import React from 'react';

import CartButton from '../cart/CartButton';
import classes from './MainNavigation.module.css';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';



const MainNavigation: React.FC = () => {
  const isActive = (navData: any) => navData.isActive ? classes.active : ''

  return (
    <header className={classes.header}>
      <Link to="/shop">
        <div className={classes.logo}>Gigashop</div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={isActive} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/shop">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/cart">
        <CartButton />
      </Link>
    </header>
  );
}

export default MainNavigation