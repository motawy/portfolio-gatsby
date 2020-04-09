import React from "react"
import "./service-card.styles.scss"

const ServiceCard = ({ title, subtitle }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h6>{title}</h6>
      </div>
      <div className="card-subtitle">
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default ServiceCard
