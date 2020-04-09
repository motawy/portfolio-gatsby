import React from "react"
import AboutPersonal from "./about-personal/about-personal.component"
import AboutCV from "./about-cv/about-cv.component"
import AboutText from "./about-text/about-text.component"
import TitleSection from "../title-section/title-section.component"
import about_image from "../../img/hero/about.jpg"
import about_imageWebp from "../../img/hero/about.webp"
import "./about.styles.scss"

const About = () => {
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
            <picture>
              <source srcSet={about_imageWebp} type="image/webp" />
              <img src={about_image} alt="about me" />
            </picture>
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
