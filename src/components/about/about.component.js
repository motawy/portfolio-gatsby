import React from "react"
import AboutPersonal from "./about-personal/about-personal.component"
import AboutCV from "./about-cv/about-cv.component"
import AboutText from "./about-text/about-text.component"
import TitleSection from "../title-section/title-section.component"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./about.styles.scss"

const About = () => {
  const { about } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "hero/about.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <TitleSection
          firstPart="About"
          secondPart="me"
          description="Full-Stack Developer based in Australia"
        />
        <div className="about-container">
          <div className="about-pic">
            <Img
              fluid={about.childImageSharp.fluid}
              alt="Avatar of Mido"
              style={{ height: "500px" }}
            />
          </div>
          <div className="about-info">
            <div className="about-name">
              <h3>Hi, I'm Mido</h3>
            </div>
            <div className="about-subtitle">
              <p>
                <span>Full-Stack</span> Developer, based in Australia
              </p>
            </div>
            <AboutText />
            <AboutPersonal />
            <AboutCV />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
