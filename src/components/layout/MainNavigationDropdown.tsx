import React, { useState, useRef, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { RootState } from "../../store";
import { useSelector } from "react-redux"
import MuiButton from "@mui/base/ButtonUnstyled";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { uiActions } from "../../store/ui-slice";
import GoogleSignInButton from "../GoogleSignInButton/GoogleSignInButton";
import { authActions } from "../../store/auth-slice";

import classes from "./MainNavigationDropDown.module.css";
import buttonClasses from "../UI/Button.module.css";
import { Link } from "react-router-dom";

const MainNavigationDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = (event: Event | React.SyntheticEvent) => {
    handleClose(event);
    dispatch(authActions.logout());
  };

  const handleToggleCart = (event: Event | React.SyntheticEvent) => {
    handleClose(event);
    dispatch(uiActions.toggleCart());
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.header}>
      <Link to="/home">
        <div className={classes.logo}>ReactStore</div>
      </Link>
      <Stack direction="row" spacing={2}>
        <div className={classes.buttons}>
          <MuiButton
            className={buttonClasses.button}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Menu
          </MuiButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link to="/Home">Home</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to="/products">Products</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to="/contact">Contact</Link>
                      </MenuItem>
                      {isLoggedIn && (
                        <MenuItem onClick={handleClose}>
                          <Link to="/profile">Profile</Link>
                        </MenuItem>
                      )}
                      <MenuItem onClick={handleToggleCart}>Cart</MenuItem>
                      {isLoggedIn && (
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      )}
                      {!isLoggedIn && (
                        <MenuItem onClick={handleClose}>
                          <GoogleSignInButton />
                        </MenuItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </div>
  );
}

export default MainNavigationDropdown;
