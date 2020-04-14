import React from "react"
import AboutMedia from "../about-media/about-media.component"
import "./about-personal.styles.scss"

const AboutPersonal = ({ personalInfo }) => {
  return (
    <div className="about-personal-info">
      <div className="about-personal-info__column">
        <AboutMedia title="Age" value={personalInfo.Age} />
        <AboutMedia title="Location" value={personalInfo.Location} />
        <AboutMedia title="E-mail" value={personalInfo.Email} />
      </div>
      <div className="about-personal-info__column">
        <AboutMedia title="Phone" value={personalInfo.Phone} />
        <AboutMedia title="Freelance" value={personalInfo.Status} />
      </div>
    </div>
  )
}

export default AboutPersonal
