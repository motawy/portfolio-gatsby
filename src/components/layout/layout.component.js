import React from "react"
import Header from "../header/header.component"
import SEO from "../SEO/SEO"
import GlobalStyles from "@styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <div className="main-class">
      <GlobalStyles />
      <SEO />
      <Header />
      {children}
    </div>
  )
}

export default Layout
