import React from "react"
import TimelineItem from "../timeline-item/timeline-item.component"
import styled from "styled-components"
import colors from "@config/colors/index.yml"

const Education = ({ education }) => {
  return (
    <EducationContainer>
      <EducationTitle>
        <h4>Education</h4>
      </EducationTitle>
      <EducationTimeline>
        {education.map((item, key) => (
          <TimelineItem
            key={key}
            title={item.title}
            years={item.years}
            description={item.description}
          />
        ))}
      </EducationTimeline>
    </EducationContainer>
  )
}

const EducationContainer = styled.div`
  flex: 1;
`

const EducationTitle = styled.div`
  padding-bottom: 40px;
  h4 {
    color: ${colors.accent};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
  }
`

const EducationTimeline = styled.div`
  border-left: 2px dotted ${colors.dimText};
  padding: 0 30px 0 30px;
  li {
    list-style: none;
  }
`

export default Education
