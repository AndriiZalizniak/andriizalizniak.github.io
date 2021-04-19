import React, { useState, useContext, useCallback } from "react";
import classnames from "classnames";
import { themes, ThemeContext } from "@/store/ThemeProvider";

import Header from "./Header";
import Footer from "./Footer";
import DarkModeBtn from "@/components/ui/DarkModeBtn";
import "@/styles/styles.scss";

const Layout = ({ children, pageClass }) => {
  const store = useContext(ThemeContext);

  const setMode = useCallback(() => {
    store.setCurrentTheme();
  }, []);

  return (
    <div
      className={classnames(pageClass, store.currentTheme, "az-page-wrapper")}
    >
      <Header />
      <main>
        <DarkModeBtn onChange={setMode} />
        {children()}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
