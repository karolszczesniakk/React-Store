import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartButton from "../cart/CartButton";
import Button from "../UI/Button";
import { useAppDispatch } from "../../store";
import { authActions } from "../../store/auth-slice";
import { RootState } from "../../store";
import GoogleSignInButton from "../GoogleSignInButton/GoogleSignInButton";



import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";


const MainNavigation: React.FC = () => {
  const isActive = (navData: any) => (navData.isActive ? classes.active : "");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  
  return (
    <header className={classes.header}>
      <Link to="/home">
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
            <NavLink className={isActive} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.buttons}>
        {isLoggedIn ? (
          <>
            <Button onClick={() => dispatch(authActions.logout())}>
              Logout
            </Button>
            <Button onClick={() => navigate('/profile') }>Profile</Button>
          </>
        ) : (
          <GoogleSignInButton />
        )}
        <CartButton />
      </div>
    </header>
  );
};

export default MainNavigation;
