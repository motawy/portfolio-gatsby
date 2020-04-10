import React from "react"
import TitleSection from "../title-section/title-section.component"
import Element from "./element/element.component"
import { graphql, useStaticQuery } from "gatsby"
import "./portfolio.styles.scss"

const Portfolio = () => {
  const { crwn, giga, gmt, smartbrain } = useStaticQuery(graphql`
    query {
      crwn: file(relativePath: { eq: "portfolio/crwn.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      giga: file(relativePath: { eq: "portfolio/giga.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gmt: file(relativePath: { eq: "portfolio/gmt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      smartbrain: file(relativePath: { eq: "portfolio/smartbrain.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

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
              image={crwn.childImageSharp.fluid}
              title="CRWN CLOTHING"
            />
            <Element
              link="https://github.com/motawy/giga-ball"
              image={giga.childImageSharp.fluid}
              title="GIGA BALL"
            />
            <Element
              link="https://github.com/motawy/get-me-there"
              image={gmt.childImageSharp.fluid}
              title="GET ME THERE"
            />
            <Element
              link="https://github.com/motawy/smart-brain"
              image={smartbrain.childImageSharp.fluid}
              title="SMART BRAIN"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
