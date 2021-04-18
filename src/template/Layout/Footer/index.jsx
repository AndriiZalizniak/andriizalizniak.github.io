import React from 'react';
import classnames from 'classnames';
import Socials from '@/components/Socials';
import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classnames(styles.inner, 'az-wrap')}>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;