import React from "react"
import AboutMedia from "../about-media/about-media.component"
import "./about-personal.styles.scss"

const AboutPersonal = () => {
  return (
    <div className="about-personal-info">
      <div className="about-personal-info__column">
        <AboutMedia title="Birthday" value="8th april 1989" />
        <AboutMedia title="Age" value="31" />
        <AboutMedia title="Residence" value="Australia" />
        <AboutMedia title="Address" value="Melbourne, AU" />
      </div>
      <div className="about-personal-info__column">
        <AboutMedia title="E-mail" value="hello@motawy.me" />
        <AboutMedia title="Phone" value="+61 402 671 497" />
        <AboutMedia title="LinkedIn" value="/mohammed-tantawy" />
        <AboutMedia title="Freelance" value="Available" />
      </div>
    </div>
  )
}

export default AboutPersonal
