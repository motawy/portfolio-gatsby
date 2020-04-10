import React from "react"
import { FaClock, FaPlus } from "react-icons/fa"
import Typewriter from "typewriter-effect"
import Mouse from "./mouse.svg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./hero.styles.scss"

const Hero = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "hero/avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const strings = [
    "Full-Stack Developer",
    "Boxing Enthusiast",
    "Motorcycles Lover",
    "Coffee addict",
  ]
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
            <Typewriter
              options={{
                strings: strings,
                autoStart: true,
                loop: true,
                wrapperClassName: "",
                cursorClassName: "",
              }}
            />
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
              <img src={Mouse} alt="Scroll down" />
            </a>
          </div>
        </div>
        <div className="right">
          <Img fluid={avatar.childImageSharp.fluid} className="img_fluid" />
        </div>
      </div>
    </section>
  )
}

export default Hero
