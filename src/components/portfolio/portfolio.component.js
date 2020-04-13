import React from "react"
import TitleSection from "../title-section/title-section.component"
import Element from "./element/element.component"
import "./portfolio.styles.scss"

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-wrapper">
        <TitleSection
          firstPart="My"
          secondPart="Portfolio"
          description="Meet My Awesome Works and Enjoy."
        />
        <div>
          <div className="portfolio">
            <Element
              link="https://github.com/motawy/crwn-clothing"
              image=""
              title="CRWN CLOTHING"
            />
            <Element
              link="https://github.com/motawy/giga-ball"
              image=""
              title="GIGA BALL"
            />
            <Element
              link="https://github.com/motawy/get-me-there"
              image=""
              title="GET ME THERE"
            />
            <Element
              link="https://github.com/motawy/smart-brain"
              image=""
              title="SMART BRAIN"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
