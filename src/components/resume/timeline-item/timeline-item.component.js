import React from "react"
import "./timeline-item.styles.scss"

const TimelineItem = ({ title, years, description }) => {
  return (
    <>
      <div className="timeline-title">
        <h5>{title}</h5>
        <span>{years}</span>
      </div>
      <div className="timeline-text">
        <p>{description}</p>
      </div>
    </>
  )
}

export default TimelineItem
