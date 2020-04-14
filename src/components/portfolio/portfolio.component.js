import React from "react"
import TitleSection from "../title-section/title-section.component"
import Element from "./element/element.component"
import "./portfolio.styles.scss"

const Portfolio = ({ data }) => {
  const {
    frontmatter: { myWork },
  } = data.nodes[0]

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
            {myWork.map((element, key) => (
              <Element
                key={key}
                link={element.link}
                image={element.image.childImageSharp.fluid}
                title={element.title}
                description={element.shortDescription}
                tech={element.techUsed}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
