import React, { useEffect, useRef } from "react"
import TitleSection from "../title-section/title-section.component"
import styled from "styled-components"
import Img from "gatsby-image"
import colors from "@config/colors/index.yml"
import media from "@styles/media"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"

const Portfolio = ({ data }) => {
  const { nodes } = data
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
            {nodes.map((portfolio, key) => {
              const { frontmatter, html } = portfolio
              const { title, github, external, techUsed, image } = frontmatter
              return (
                <ProjectElement key={key}>
                  <ProjectContent>
                    <ProjectName>
                      {external ? (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </ProjectName>
                    <ProjectDescription
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                    {techUsed && (
                      <ProjectTechList>
                        {techUsed.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ProjectTechList>
                    )}
                    <ProjectLinkWrapper>
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="GitHub Link"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </ProjectLinkWrapper>
                  </ProjectContent>

                  <ProjectImgContainer
                    href={external ? external : github ? github : "#"}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <ProjectFeaturedImg
                      fluid={image.childImageSharp.fluid}
                      alt={title}
                    />
                  </ProjectImgContainer>
                </ProjectElement>
              )
            })}
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
  grid-template-columns: repeat(auto-fit, minmax(650px, 1fr));
  gap: 2em;
  ${media.tablet`
    display: flex;
    flex-direction: column;
  `}
`

const ProjectContent = styled.div`
  padding: 40px 120;
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.smallTablet`
    grid-column: 1 / -1;
    padding: 40px;
    z-index: 5;
  `};
`

const ProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;
  color: ${colors.light};
  ${media.tablet`font-size: 24px;`};
  a {
    text-decoration: none;
    color: ${colors.light};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      color: ${colors.accent};
    }
    ${media.tablet`display: block;`};
  }
`

const ProjectDescription = styled.div`
  box-shadow: 0 10px 30px -15px ${colors.shadow};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.bgTint};
  color: ${colors.dimText};
  font-size: 14px;
  border-radius: 5px;
  ${media.smallTablet`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
        box-shadow: none;
    }
    &:hover,
    &:focus {
        box-shadow: 0 20px 30px -15px ${colors.shadow};
    }
  `};
  p {
    margin: 0;
  }
`
const ProjectTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 10px;
  list-style: none;

  li {
    font-size: 11px;
    color: ${colors.dimText};
    opacity: 0.6;
    margin-right: 20px;
    margin-bottom: 8px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.smallTablet`
    color: ${colors.dimText};
    margin-right: 10px;
  `};
  }
`

const ProjectLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    transition: all 0.4s ease;
    padding: 10px;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
    svg {
      color: ${colors.dimText};
      width: 22px;
      height: 22px;
    }
  }
`

const ProjectFeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 5px;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`

const ProjectImgContainer = styled.a`
  box-shadow: 0 10px 30px -15px ${colors.dark};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${colors.bgTint};
  border-radius: 5px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${media.tablet`height: 100%;`};
  ${media.smallTablet`
  grid-column: 1 / -1;
  opacity: 0.25;
`};
  &:hover,
  &:focus {
    background: transparent;
    box-shadow: 0 20px 30px -15px ${colors.dark};
    &:before,
    ${ProjectFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: ${colors.dark};
    mix-blend-mode: screen;
  }
`
const ProjectElement = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.smallTablet`
  margin-bottom: 70px;
`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ProjectContent} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.smallTablet`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.bigPhone`padding: 30px 25px 20px;`};
    }
    ${ProjectTechList} {
      justify-content: flex-end;
      li {
        margin-left: 20px;
        margin-right: 0;
      }
    }
    ${ProjectLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ProjectImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.smallTablet`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`
export default Portfolio
