import React from "react"
import Resume from "../../../files/resume.pdf"
import styled from "styled-components"
import colors from "@config/colors.yml"
import media from "@styles/media"

const AboutCV = () => {
  return (
    <AboutCVContainer>
      <AboutCVButton href={Resume} target="_blank" rel="noopener noreferrer">
        Download CV
      </AboutCVButton>
    </AboutCVContainer>
  )
}

const AboutCVContainer = styled.div`
  margin-top: 28px;
`

const AboutCVButton = styled.a`
  cursor: pointer;
  border: 1px solid ${colors.accent};
  border-radius: 25px;
  padding: 15px 25px;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.accent};
  background-color: ${colors.dark};
  font-weight: 500;
  font-size: 15px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  ${media.giant`font-size: 13px`}

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${colors.dark};
    background-color: ${colors.accent};
    border-color: ${colors.accent};
  }

  svg {
    margin-right: 5px;
    font-size: 14px;
  }
`

export default AboutCV
