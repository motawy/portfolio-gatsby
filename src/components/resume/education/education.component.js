import React from "react"
import TimelineItem from "../timeline-item/timeline-item.component"
import "./education.styles.scss"

const Education = () => {
  return (
    <div className="education">
      <div className="edu-title">
        <h4>Education</h4>
      </div>
      <div className="edu-timeline">
        <TimelineItem
          title="Nano Degree - Cloud Developer"
          years="2020"
          description="Specialised as Cloud Developer using AWS to develop and deploy
              apps leveraging microservices, Kubernetes clusters, and serverless
              application technology."
        />
        <TimelineItem
          title="Bachelor of IT - Mobile Apps"
          years="2017 - 2019"
          description="Developed various applications using the latest technologies for
              Web and Mobile utilizing for clients and companies achieving great
              results and expectation."
        />
      </div>
    </div>
  )
}

export default Education
