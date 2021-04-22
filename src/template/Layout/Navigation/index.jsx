import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import NavItems from "@/mocks/navigationItems";
import * as styles from "./navigation.module.scss";

const Navigation = (props) => {
  return (
    <nav className={classnames(styles.nav, props.className)}>
      <ul className={classnames(styles.list)}>
        {NavItems.map((navItem) => {
          return (
            <li key={navItem.title}>
              <Link
                to={navItem.href}
                activeClassName={classnames(styles.linkActive)}
                className={classnames(styles.link)}
              >
                {navItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
