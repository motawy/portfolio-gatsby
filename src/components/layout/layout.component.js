import React from "react"
import Header from "../header/header.component"
import Seo from "../SEO/SEO"
import GlobalStyles from "@styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Seo />
      <Header />
      {children}
    </>
  )
}

export default Layout
