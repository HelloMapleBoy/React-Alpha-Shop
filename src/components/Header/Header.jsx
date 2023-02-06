import { ReactComponent as ToggleIcon } from "../../assets/Icons/toggle.svg";
import { ReactComponent as LogoIcon } from "../../assets/Icons/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/Icons/search.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/cart.svg";
import { ReactComponent as MoonIcon } from "../../assets/Icons/moon.svg";
// import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";

import Container from "../UI/Container";
import classes from "./Header.module.scss";

const NavbarMenu = ({ item, href }) => {
  return (
    <li className={classes.navitems}>
      <a className={classes.item} href={href}>
        {item}
      </a>
    </li>
  );
};

const header = () => {
  return (
    <Container className={classes.header}>
      <input
        type="checkbox"
        className={classes.checkbox}
        id="navbar-toggle"
      ></input>
      <label htmlFor="navbar-toggle" className={classes.toggleIcon}>
        <ToggleIcon />
      </label>
      <nav className={classes.nav}>
        <ul className={classes.items}>
          <NavbarMenu item="男款" href="/" />
          <NavbarMenu item="女款" href="/" />
          <NavbarMenu item="最新消息" href="/" />
          <NavbarMenu item="客製商品" href="/" />
          <NavbarMenu item="聯絡我們" href="/" />
        </ul>
        <div className={classes.icons}>
          <SearchIcon />
          <CartIcon />
          <MoonIcon />
        </div>
      </nav>
      <a href="/" className={classes.logoIcon}>
        <LogoIcon />
      </a>
    </Container>
  );
};

export default header;
