import React from "react"
import SocialLinks from "./social-links/social-links.components"
import BurgerMenu from "./menu/burger-menu.component"
import "./header.styles.scss"

const Header = () => {
  window.onscroll = () => {
    scrollFunction()
  }

  const scrollFunction = () => {
    const header = document.getElementById("logoHeader")
    const wrapper = document.querySelector(".wrapper")
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.style.fontSize = "16px"
      wrapper.classList.add("scrolled")
    } else {
      header.style.fontSize = "24px"
      wrapper.classList.remove("scrolled")
    }
  }
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="logo">
          <a href="/" title="MIDO - Portfolio" id="logoHeader">
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
