import React from "react"
import styled from "styled-components"
import colors from "@config/colors.yml"

const TimelineItem = ({ title, years, description }) => {
  return (
    <>
      <TimeLineTitle>
        <h5>{title}</h5>
        <span>{years}</span>
      </TimeLineTitle>
      <TimeLineText>
        <p>{description}</p>
      </TimeLineText>
    </>
  )
}

const TimeLineTitle = styled.div`
  h5 {
    color: ${colors.light};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 8px;
    position: relative;

    &:before {
      position: absolute;
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 15px;
      background-color: ${colors.accent};
      left: -43px;
    }
  }

  span {
    color: ${colors.dimText};
    font-size: 15px;
  }
`

const TimeLineText = styled.div`
  padding: 30px 0 50px;
  p {
    color: ${colors.dimText};
    font-size: 0.9rem;
    line-height: 24px;
  }
`

export default TimelineItem
