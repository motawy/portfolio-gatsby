import React from "react"
import AboutMedia from "../about-media/about-media.component"
import "./about-personal.styles.scss"

const AboutPersonal = ({ personalInfo }) => {
  return (
    <div className="about-personal-info">
      <div className="about-personal-info__column">
        <AboutMedia title="Age" value={personalInfo.aboutAge} />
        <AboutMedia title="Location" value={personalInfo.aboutLocation} />
        <AboutMedia title="E-mail" value={personalInfo.aboutEmail} />
      </div>
      <div className="about-personal-info__column">
        <AboutMedia title="Phone" value={personalInfo.aboutPhone} />
        <AboutMedia title="Freelance" value={personalInfo.aboutStatus} />
      </div>
    </div>
  )
}

export default AboutPersonal
