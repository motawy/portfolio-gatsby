import React from "react"
import "./info.styles.scss"

const Info = ({ info }) => {
  return (
    <div className="contact-info">
      <div className="info-title">
        <span>{info.title}</span>
      </div>
      <div className="info-subtitle">
        <span>{info.subtitle}</span>
      </div>
      <div className="block-info">
        <div className="block-info__item">
          Location: <span>{info.location}</span>
        </div>
        <div className="block-info__item">
          E-mail: <span>{info.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Info
