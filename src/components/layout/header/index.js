import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../lib/auth";

import "./header.css";

const Header = (props) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      className="site-header"
      role="banner"
      itemScope="itemScope"
      itemType="http://schema.org/WPHeader"
    >
      <div
        className="site-title"
        itemScope
        itemType="http://schema.org/Organization"
      >
        10up Blog
      </div>

      <nav
        className="site-navigation"
        role="navigation"
        itemScope="itemScope"
        itemType="http://schema.org/SiteNavigationElement"
      >
        <a
          href="#menu-main-nav"
          id="js-menu-toggle"
          className="site-menu-toggle"
        >
          <span className="screen-reader-text">Primary Menu</span>
          <span aria-hidden="true">☰</span>
        </a>

        <ul id="menu-main-nav" className="primary-menu">
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
            <Link to="/pages/about-us">About</Link>
          </li>

          {!user ||
            (!user.user_display_name && (
              <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                <Link to="/login">Login</Link>
              </li>
            ))}

          {user && user.user_display_name && (
            <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
