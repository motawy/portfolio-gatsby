import React from "react"
import { FaLink } from "react-icons/fa"
import Img from "gatsby-image"
import "./element.styles.scss"

const Element = ({ link, image, title, description, tech }) => {
  return (
    <div className="element-container">
      <div className="element-card">
        <a href={link} className="onHover">
          <div className="img">
            <Img fluid={image} />
          </div>
          <div className="details-wrap">
            <div className="details">
              <div className="details-title">
                <span>{title}</span>
              </div>
              <div className="details-descr">
                <p className="descr">{description}</p>
                <div className="tech-used">
                  {tech.map((t, i) => (
                    <span key={i}>
                      {t}
                      {"  "}
                    </span>
                  ))}
                </div>
              </div>
              <div className="details-btn">
                <FaLink color="#f2d367" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Element
