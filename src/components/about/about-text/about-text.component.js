import React from "react"
import "./about-text.styles.scss"

const AboutText = ({ text }) => {
  return (
    <div className="about-text">
      <p>{text}</p>
    </div>
  )
}

export default AboutText
