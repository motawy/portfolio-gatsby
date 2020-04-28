import React from "react"
import TimelineItem from "../timeline-item/timeline-item.component"
import styled from "styled-components"
import colors from "@config/colors/index.yml"
import media from "@styles/media"

const Work = ({ work }) => {
  return (
    <WorkContainer>
      <WorkTitle>
        <h4>Experience</h4>
      </WorkTitle>
      <WorkTimeine>
        {work.map((item, key) => (
          <TimelineItem
            key={key}
            title={item.title}
            years={item.years}
            description={item.description}
          />
        ))}
      </WorkTimeine>
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
  flex: 2;
  ${media.tablet`
    padding-top: 40px;
  `}
`

const WorkTitle = styled.div`
  padding-bottom: 40px;
  h4 {
    text-transform: uppercase;
    color: ${colors.accent};
    font-size: 24px;
    font-weight: 600;
  }
`

const WorkTimeine = styled.div`
  border-left: 2px dotted ${colors.dimText};
  padding: 0 30px 0 30px;
  li {
    list-style: none;
  }
`

export default Work
