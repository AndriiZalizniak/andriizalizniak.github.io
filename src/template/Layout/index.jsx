import React, { useState } from 'react';
import classnames from 'classnames';
import Header from './Header';
import Footer from './Footer';
import DarkModeBtn from '@/components/ui/DarkModeBtn';
import '@/styles/styles.scss';

const Layout = ({children, pageClass}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<>
      <div className={classnames(pageClass, isDarkMode && 'az-dark-mode', 'az-page-wrapper ')}>
        <Header />
        <main>
          <DarkModeBtn onChange={ setMode } />
          { children() }
        </main>
        <Footer />
      </div>
</>
  );
};

export default Layout;