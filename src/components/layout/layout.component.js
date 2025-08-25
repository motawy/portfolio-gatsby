import React from "react"
import Header from "../header/header.component"
import GlobalStyles from "@styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default Layout
