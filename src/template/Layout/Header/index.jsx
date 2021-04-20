import React from "react";
import classnames from "classnames";
import * as styles from "./header.module.scss";

const Header = () => {
  return (
    <header
      className={classnames(
        styles.header,
        styles.scrolling,
        "az-general-transition"
      )}
    >
      <div className={classnames(styles.inner, "az-wrap js-header-name")}>
        <div className={styles.name}>
          <p
            className={classnames(
              styles.name__inner,
              "az-h1 az-txt-up js-header-name__upper init"
            )}
          >
            <span className={classnames(styles.full, styles.name__item)}>
              andrii.zalizniak
            </span>

            <span className={classnames(styles.short, styles.name__item)}>
              a.z
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
