import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import Navigation from "@/template/Layout/Navigation";
import URL from "@/mocks/urls";
import * as styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={classnames(styles.header, "az-general-transition")}>
      <div className={classnames(styles.wrapper)}>
        <div className={classnames(styles.inner, "js-header-name")}>
          <div className={styles.name}>
            <p
              className={classnames(
                styles.name__inner,
                "az-h1 az-txt-up js-header-name__upper init"
              )}
            >
              {/* <span className={classnames(styles.full, styles.name__item)}>
                andrii.zalizniak
              </span> */}

              <Link
                to={URL.home}
                className={classnames(styles.short, styles.link)}
              >
                {/* <span > */}a<span>.</span>z{/* </span> */}
              </Link>
            </p>
          </div>

          <Navigation className={"nav-----"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
