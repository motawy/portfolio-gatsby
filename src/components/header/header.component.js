import React from "react"
import SocialLinks from "./social-links/social-links.components"
import BurgerMenu from "./menu/burger-menu.component"
import "./header.styles.scss"

const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="logo">
          <a href="/" title="MIDO - Portfolio">
            MIDO.
          </a>
        </div>
        <BurgerMenu />
        <SocialLinks />
      </div>
    </header>
  )
}

export default Header
