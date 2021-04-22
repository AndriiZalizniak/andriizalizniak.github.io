import React, { useContext, useCallback } from "react";
import classnames from "classnames";
import { ThemeContext } from "@/store/ThemeProvider";

import Header from "./Header";
import Footer from "./Footer";
import DarkModeBtn from "@/components/ui/DarkModeBtn";
import "@/styles/styles.scss";

const Layout = ({ children, pageClass }) => {
  const store = useContext(ThemeContext);

  const setMode = useCallback(() => {
    store.setCurrentTheme();
  }, [store]);

  return (
    <div
      className={classnames(pageClass, "az-page-wrapper az-general-transition")}
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
