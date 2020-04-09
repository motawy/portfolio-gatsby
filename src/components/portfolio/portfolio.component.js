import React from "react"
import TitleSection from "../title-section/title-section.component"
import Element from "./element/element.component"
import crwnWebp from "../../img/portfolio/crwn.webp"
import crwnImg from "../../img/portfolio/crwn.png"
import gigaWebp from "../../img/portfolio/giga.webp"
import gigaImg from "../../img/portfolio/giga.png"
import gmtWebp from "../../img/portfolio/gmt.webp"
import gmtImg from "../../img/portfolio/gmt.png"
import sbWebp from "../../img/portfolio/smartbrain.webp"
import sbImg from "../../img/portfolio/smartbrain.png"
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
              imageWebp={crwnWebp}
              image={crwnImg}
              title="CRWN CLOTHING"
            />
            <Element
              link="https://github.com/motawy/giga-ball"
              imageWebp={gigaWebp}
              image={gigaImg}
              title="GIGA BALL"
            />
            <Element
              link="https://github.com/motawy/get-me-there"
              imageWebp={gmtWebp}
              image={gmtImg}
              title="GET ME THERE"
            />
            <Element
              link="https://github.com/motawy/smart-brain"
              imageWebp={sbWebp}
              image={sbImg}
              title="SMART BRAIN"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
