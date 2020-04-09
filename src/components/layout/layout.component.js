import React from "react"
import Header from "../header/header.component"
import "./layout.styles.scss"
import SEO from "../SEO/SEO"

const Layout = ({ children }) => {
  return (
    <div className="main-class">
      <SEO />
      <Header />
      {children}
    </div>
  )
}

export default Layout
