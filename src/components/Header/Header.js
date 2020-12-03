import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import Menu from "@material-ui/core/Menu";
import { MenuItem, Menu } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
// import HelpIcon from "@material-ui/icons/Help";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import Logout from "@material-ui/icons/ExitToApp";
// import Login from "@material-ui/icons/PersonAdd";
import { useStateProvider } from "../../StateProvider";
import { logout } from "../../firebase";

function Header() {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [{ user }, dispatch] = useStateProvider();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const logoutAndRedirect = () => {
    handleClose();
    logout();
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={logo}
          alt=""
          className="header__logoImage"
          onClick={() => history.push("/")}
        />
        <h3>GymBros</h3>
      </div>
      <div className="header__search">
        <SearchIcon style={{ width: "40px" }} />
        <input type="text"></input>
      </div>
      <div className="header__menu">
        <MenuIcon aria-controls="menu" onClick={handleClick} />
        <Menu
          id="menu"
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          disableScrollLock={true}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {user ? (
            <MenuItem onClick={handleClose} component={Link} to="/profile">
              {/* <AccountCircleIcon /> */}
              <p>Profile</p>
            </MenuItem>
          ) : null}
          <MenuItem onClick={handleClose} component={Link} to="/help">
            {/* <HelpIcon /> */}
            <p>Help</p>
          </MenuItem>
          {user ? (
            <MenuItem onClick={logoutAndRedirect} component={Link} to="/">
              {/* <Login /> */}
              Logout
            </MenuItem>
          ) : (
            <MenuItem onClick={handleClose} component={Link} to="/login">
              {/* <Login /> */}
              Login
            </MenuItem>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Header;
