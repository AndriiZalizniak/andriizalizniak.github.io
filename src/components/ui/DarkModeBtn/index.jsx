import React, { useContext } from "react"
import classnames from "classnames"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

import { ThemeContext } from "@/store/ThemeProvider"

import { btn, icon } from "./darkModeBtn.module.scss"

const DarkModeBtn = ({ onChange }) => {
  const store = useContext(ThemeContext)

  const currentThemeName = store.currentTheme.THEME_NAME

  console.log(store.currentTheme.THEME_NAME)
  return (
    <button type={"button"} onClick={onChange} className={classnames(btn)}>
      {currentThemeName === "light" ? (
        <SunIcon className={classnames(icon)} />
      ) : (
        <MoonIcon className={classnames(icon)} />
      )}
    </button>
  )
}

export default DarkModeBtn
