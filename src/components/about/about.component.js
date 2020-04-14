import React from "react"
import AboutPersonal from "./about-personal/about-personal.component"
import AboutCV from "./about-cv/about-cv.component"
import AboutText from "./about-text/about-text.component"
import TitleSection from "../title-section/title-section.component"
import Img from "gatsby-image"
import "./about.styles.scss"

const About = ({ data }) => {
  const { frontmatter } = data.nodes[0]
  const {
    aboutTitle,
    aboutText,
    aboutSubtitle,
    aboutStatus,
    aboutPhone,
    aboutLocation,
    aboutAge,
    aboutEmail,
    aboutImage,
  } = frontmatter

  const personalInfo = {
    Age: aboutAge,
    Email: aboutEmail,
    Phone: aboutPhone,
    Location: aboutLocation,
    Status: aboutStatus,
  }

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
              fluid={aboutImage.childImageSharp.fluid}
              alt="Avatar of Mido"
              style={{ height: "500px" }}
            />
          </div>
          <div className="about-info">
            <div className="about-name">
              <h3>{aboutTitle}</h3>
            </div>
            <div className="about-subtitle">
              <p>{aboutSubtitle}</p>
            </div>
            <AboutText text={aboutText} />
            <AboutPersonal personalInfo={personalInfo} />
            <AboutCV />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
