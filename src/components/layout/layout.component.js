import React from "react"
import Header from "../header/header.component"
import "./layout.styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="main-class">
      <Header />
      {children}
    </div>
  )
}

export default Layout
