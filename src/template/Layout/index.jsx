import React, { useContext, useCallback } from "react"
import classnames from "classnames"
import { ThemeContext } from "@/store/ThemeProvider"
// import HorizontalScroll from "react-scroll-horizontal"
import Header from "./Header"
import Footer from "./Footer"
import DarkModeBtn from "@/components/ui/DarkModeBtn"
import "@/styles/styles.scss"

const Layout = ({ children, pageClass }) => {
  const store = useContext(ThemeContext)

  const setMode = useCallback(() => {
    store.setCurrentTheme()
  }, [store])

  return (
    <div
      className={classnames(pageClass, "az-page-wrapper az-general-transition")}
      // onWheel={(e) => console.log(e.pageX, e.clientX, e.screenX, e)}
    >
      <DarkModeBtn onChange={setMode} />
      <Header />
      {/* <HorizontalScroll
        reverseScroll={true}
        config={{ stiffness: 50, damping: 30 }}
      > */}
      <main style={{ display: "flex" }}>{children()}</main>
      {/* </HorizontalScroll> */}
      <Footer />
    </div>
  )
}

export default Layout
