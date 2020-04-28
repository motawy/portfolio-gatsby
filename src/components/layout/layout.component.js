import React from "react"
import Header from "../header/header.component"
import SEO from "../SEO/SEO"
import GlobalStyles from "@styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <Header />
      {children}
    </>
  )
}

export default Layout
