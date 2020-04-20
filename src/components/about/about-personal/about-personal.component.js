import React from "react"
import AboutMedia from "../about-media/about-media.component"
import styled from "styled-components"
import media from "@styles/media"

const AboutPersonal = ({ personalInfo }) => {
  return (
    <AboutPersonalInfo>
      <AboutPersonalColumn>
        <AboutMedia title="Age" value={personalInfo.aboutAge} />
        <AboutMedia title="Location" value={personalInfo.aboutLocation} />
        <AboutMedia title="E-mail" value={personalInfo.aboutEmail} />
      </AboutPersonalColumn>
      <AboutPersonalColumn>
        <AboutMedia title="Phone" value={personalInfo.aboutPhone} />
        <AboutMedia title="Freelance" value={personalInfo.aboutStatus} />
      </AboutPersonalColumn>
    </AboutPersonalInfo>
  )
}

const AboutPersonalInfo = styled.div`
  padding: 30px 0 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  ${media.desktop`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`

const AboutPersonalColumn = styled.div`
  &:last-child {
    padding-left: 40px;
  }
  ${media.desktop`
    &:last-child {
        padding-left: 0;
      }
  `}
`

export default AboutPersonal
