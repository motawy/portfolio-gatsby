import React from "react"
import { FaLink } from "react-icons/fa"
import Img from "gatsby-image"
import "./element.styles.scss"

const Element = ({ link, image, title }) => {
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
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni temporibus delectus culpa incidunt tempora vero quae,
                  perferendis excepturi aperiam similique dignissimos ipsam
                  doloribus cumque quod porro aut debitis quisquam possimus!
                </span>
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
