import React from "react"
import { FaClock, FaPlus } from "react-icons/fa"
import Mouse from "./mouse.svg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import jump from "jump.js"
import TextLoop from "react-text-loop"
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

  return (
    <section
      className="section-hero"
      id="home"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="hero-title">
            <h1>
              M<span>i</span>do
              <br />
              Tawy
            </h1>
          </div>
          <div className="par" id="selector">
            <h1 className="ah-headline">
              I'm{" "}
              <TextLoop mask={true}>
                <span>a Full-Stack Developer</span>
                <span>a Cloud Lover </span>
                <span>a Coffee Addict </span>
                <span>a Boxing Enthusiast </span>
              </TextLoop>{" "}
            </h1>
          </div>
          <div className="hero-btn">
            <button onClick={() => jump("#contact")} id="contact_btn">
              <FaPlus /> Contact me
            </button>
            <span>
              <FaClock /> I'll get in touch with you ASAP.
            </span>
          </div>
          <div className="about">
            <button onClick={() => jump("#about")} id="to_about">
              <img src={Mouse} alt="Scroll down" />
            </button>
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
