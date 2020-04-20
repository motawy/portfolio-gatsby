import React from "react"
import styled from "styled-components"
import media from "@styles/media"
import colors from "@config/colors.yml"

const AboutMedia = ({ title, value }) => {
  return (
    <AboutMediaContainer>
      <label>{title}:</label>
      <p>{value}</p>
    </AboutMediaContainer>
  )
}

const AboutMediaContainer = styled.div`
  padding-bottom: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  ${media.phone`
      display: -webkit-box;
  `}
  label {
    width: 120px;
    color: ${colors.light};
  }
  p {
    padding: 0 10px;
    color: ${colors.dimText};
    font-size: 0.9rem;
    font-weight: 400;
  }
`

export default AboutMedia
