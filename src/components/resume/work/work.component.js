import React from "react"
import TimelineItem from "../timeline-item/timeline-item.component"
import "./work.styles.scss"

const Work = ({ work }) => {
  return (
    <div className="experience">
      <div className="work-title">
        <h4>Experience</h4>
      </div>
      <div className="work-timeline">
        {work.map((item, key) => (
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

export default Work
