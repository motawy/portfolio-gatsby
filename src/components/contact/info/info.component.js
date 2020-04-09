import React from "react"
import "./info.styles.scss"

const Info = () => {
  return (
    <div className="contact-info">
      <div className="info-title">
        <span>Let’s Get in touch!</span>
      </div>
      <div className="info-subtitle">
        <span>
          I am always open to talk about projects or possible collaborations.
          Leave me a message here or contact me through the other channels.
        </span>
      </div>
      <div className="block-info">
        <div className="block-info__item">
          Location: <span>Melbourne, AU</span>
        </div>
        <div className="block-info__item">
          E-mail: <span>hello@motawy.me</span>
        </div>
      </div>
    </div>
  )
}

export default Info
