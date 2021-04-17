import React from 'react';
import classnames from 'classnames';
import * as styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classnames(styles.inner, 'az-wrap js-header-name')}>
        <div className={styles.name}>
          <p className={classnames(styles.name__inner, 'az-h1 az-txt-up js-header-name__upper init')}>
            <span className={classnames(styles.short, styles.name__item)}>a.z</span>
            
            <span className={classnames(styles.full, styles.name__item)}>andrii.zalizniak</span>
          </p>
          {/* <p className={classnames('az-h1 az-txt-up js-header-name__upper')}>
            <span>a</span><span>.</span><span>z</span>
          </p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;