import React, { useEffect, useRef } from "react"
import TitleSection from "../title-section/title-section.component"
import Element from "./element"
import styled from "styled-components"
import media from "@styles/media"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"

const Portfolio = ({ data }) => {
  const {
    frontmatter: { myWork },
  } = data.nodes[0]
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <PortfolioSection id="portfolio" ref={revealContainer}>
      <PortfolioWrapper>
        <TitleSection
          firstPart="My"
          secondPart="Portfolio"
          description="Here's some of my latest work."
        />
        <div>
          <PortfolioContainer>
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
          </PortfolioContainer>
        </div>
      </PortfolioWrapper>
    </PortfolioSection>
  )
}

const PortfolioSection = styled.section`
  padding: 0 120px 100px;
  ${media.bigDesktop`
      padding: 0 40px;
  `}
`

const PortfolioWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`

const PortfolioContainer = styled.div`
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  ${media.bigPhone`
    display: flex;
    flex-direction: column;
  `}
`

export default Portfolio
