import React from "react"
import TimelineItem from "../timeline-item/timeline-item.component"
import "./education.styles.scss"

const Education = ({ education }) => {
  return (
    <div className="education">
      <div className="edu-title">
        <h4>Education</h4>
      </div>
      <div className="edu-timeline">
        {education.map((item, key) => (
          <TimelineItem
            key={key}
            title={item.title}
            years={item.years}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Education
