import React from "react"
import styled from "styled-components"
import media from "@styles/media"
import colors from "@config/colors.yml"

const TitleSection = ({ firstPart, secondPart, description }) => {
  return (
    <TitleOfSection>
      <h2>
        {firstPart} <span>{secondPart}</span>
      </h2>
      <p>{description}</p>
    </TitleOfSection>
  )
}

const TitleOfSection = styled.div`
  border-left: 3px solid ${colors.accent};
  padding-left: 10px;
  h2 {
    color: ${colors.light};
    text-transform: uppercase;
    font-size: 36px;
    position: relative;
    white-space: nowrap;
  }
  span {
    color: ${colors.accent};
  }
  p {
    padding-top: 10px;
    color: ${colors.dimText};
  }
  ${media.desktop`
    h2 {
      font-size: 33px;
    }
    p {
      font-size: 0.9rem;
    }
  `}
`

export default TitleSection
