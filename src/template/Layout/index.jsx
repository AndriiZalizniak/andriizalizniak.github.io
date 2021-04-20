import React, { useState, useContext, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { config } from "react-spring";
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

  const [xe, setY] = useSpring(() => ({ y: 0, config: config.slow }));
  const onScroll = useCallback((e) => {
    console.log(e.wheelDeltaY);

    setY({ y: e.wheelDeltaY });
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
  }, []);

  console.log(setY);
  return (
    <div
      className={classnames(pageClass, "az-page-wrapper az-general-transition")}
      onScroll={onScroll}
    >
      <Header />
      <main
        style={{
          color: "#000",
          // translateX: y + "px",
          transform: `translateX(${xe}px)`,
        }}
      >
        <DarkModeBtn onChange={setMode} />
        {children()}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
