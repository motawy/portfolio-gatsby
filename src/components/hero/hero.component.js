import React from "react"
import { FaClock, FaPlus } from "react-icons/fa"
import Mouse from "./mouse.svg"
import jump from "jump.js"
import TextLoop from "react-text-loop"
import Img from "gatsby-image"
import "./hero.styles.scss"

const Hero = ({ data }) => {
  const { frontmatter } = data.nodes[0]
  const {
    heroTitle,
    heroName,
    heroIam,
    heroContactButton,
    heroContactText,
    heroAvatar,
  } = frontmatter
  return (
    <section
      className="section-hero"
      id="home"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="hero-title">
            <h4>{heroTitle}</h4>
            <h1>{heroName}</h1>
          </div>
          <div className="par" id="selector">
            <h1 className="ah-headline">
              I'm{" "}
              <TextLoop mask={true}>
                {heroIam.map(phrase => (
                  <span key={phrase}>{phrase}</span>
                ))}
              </TextLoop>{" "}
            </h1>
          </div>
          <div className="hero-btn">
            <button
              aria-label="Go to the contact section"
              onClick={() => jump("#contact")}
              id="contact_btn"
            >
              <FaPlus /> {heroContactButton}
            </button>
            <span>
              <FaClock /> {heroContactText}
            </span>
          </div>
          <div className="about">
            <button onClick={() => jump("#about")} id="to_about">
              <img src={Mouse} alt="Scroll down" />
            </button>
          </div>
        </div>
        <div className="right">
          <Img fluid={heroAvatar.childImageSharp.fluid} className="img_fluid" />
        </div>
      </div>
    </section>
  )
}

export default Hero
