import React from "react"
import styled from "styled-components"
import colors from "@config/colors.yml"

const AboutText = ({ text }) => {
  return (
    <AboutTextContent>
      {text.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </AboutTextContent>
  )
}
const AboutTextContent = styled.div`
  padding-top: 20px;
  p {
    color: ${colors.light};
    line-height: 26px;
    font-size: 0.9rem;
    margin-top: 16px;
  }
`

export default AboutText
