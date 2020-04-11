import React from "react"
import Social from "../social/social.component"
import jump from "jump.js"
import "./menu.styles.scss"

const Menu = () => {
  return (
    <div className="menu">
      <div className="wrap">
        <nav className="nav">
          <ul>
            <li>
              <button
                aria-label="Go to the home section"
                onClick={() => jump("#home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                aria-label="Go to the about section"
                onClick={() => jump("#about")}
              >
                About me
              </button>
            </li>
            <li>
              <button
                aria-label="Go to the resume section"
                onClick={() => jump("#resume")}
              >
                Resume
              </button>
            </li>
            <li>
              <button
                aria-label="Go to the services section"
                onClick={() => jump("#services")}
              >
                Services
              </button>
            </li>
            <li>
              <button
                aria-label="Go to the portfolio section"
                onClick={() => jump("#portfolio")}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                aria-label="Go to the contact section"
                onClick={() => jump("#contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <div className="info">
          <div className="info-wrap">
            <span>CONTACT INFO</span>
            <ul className="contact">
              <li>Melbourne, AU</li>
              <li>+61 402 671 497</li>
              <li>hello@motawy.me</li>
            </ul>
            <span>FIND ME HERE</span>
            <ul className="link">
              <Social size="32" />
            </ul>
          </div>
        </div>
      </div>
      <div className="close_btn">
        <span></span>
      </div>
    </div>
  )
}

export default Menu
