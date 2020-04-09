import React from "react"
import { FaClock, FaPlus } from "react-icons/fa"
import mouse from "../../img/icons/mouse.svg"
import avatar from "../../img/hero/avatar.png"
import avatarWebp from "../../img/hero/avatar.webp"
import "./hero.styles.scss"

const Hero = () => {
  return (
    <section
      className="section-hero"
      id="home"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="phone">
            <a href="mailto:hello@motawy.me">hello@motawy.me</a>
          </div>
          <div className="hero-title">
            <h1>
              M<span>i</span>do
              <br />
              Tawy
            </h1>
          </div>
          <div className="par">
            <p>
              Welcome! This my personal portfolio website. Please take a look!
            </p>
          </div>
          <div className="hero-btn">
            <a href="#contact" id="contact_btn">
              <FaPlus /> Contact me
            </a>
            <span>
              <FaClock /> I'll get in touch with you ASAP.
            </span>
          </div>
          <div className="about">
            <a href="#about">
              <img src={mouse} alt="scroll" />
            </a>
          </div>
        </div>
        <div className="right">
          <picture>
            <source srcSet={avatarWebp} type="image/webp" />
            <img src={avatar} alt="avatar of mido" />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Hero
