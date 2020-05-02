import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import TitleSection from "../title-section/title-section.component"
import media from "@styles/media"
import colors from "@config/colors/index.yml"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi"

const Projects = ({ data }) => {
  const revealContainer = useRef(null)
  const { nodes } = data

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])
  return (
    <ProjectsSection ref={revealContainer} id="projects">
      <ProjectsWrapper>
        <TitleSection
          firstPart="More"
          secondPart="Projects"
          description="Here's more projects."
        />
        <ProjectsGrid>
          {nodes.map((project, key) => {
            const { frontmatter, html } = project
            const { title, github, hosted, techUsed } = frontmatter
            return (
              <ProjectCard key={key}>
                <ProjectCardInner>
                  <header>
                    <ProjectHeader>
                      <ProjectMainIcon>
                        <FiFolder color={colors.accent} />
                      </ProjectMainIcon>
                      <ProjectLinks>
                        {github && (
                          <ProjectIconLinks
                            href={github}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="GitHub Link"
                          >
                            <FiGithub size="16px" color={colors.light} />
                          </ProjectIconLinks>
                        )}
                        {hosted && (
                          <ProjectIconLinks
                            href={hosted}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Hosted Link"
                          >
                            <FiExternalLink size="16px" color={colors.light} />
                          </ProjectIconLinks>
                        )}
                      </ProjectLinks>
                    </ProjectHeader>
                    <ProjectName>{title}</ProjectName>
                    <ProjectDescription
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </header>
                  <footer>
                    <ProjectTechUsed>
                      {techUsed.map((tech, key) => (
                        <li key={key}>{tech}</li>
                      ))}
                    </ProjectTechUsed>
                  </footer>
                </ProjectCardInner>
              </ProjectCard>
            )
          })}
        </ProjectsGrid>
      </ProjectsWrapper>
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  padding: 0 120px 100px;
  ${media.bigDesktop`
      padding: 0 40px;
  `}
`

const ProjectsWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`

const ProjectsGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
`

const ProjectCardInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 10px 30px -15px ${colors.shadow};
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: 5px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: ${colors.bgTint};
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px ${colors.shadow};
  }
`
const ProjectMainIcon = styled.div`
  transition: all 0.5s ease;
  opacity: 0.6;
  svg {
    width: 36px;
    height: 36px;
  }
`

const ProjectCard = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectCardInner} {
      transform: translateY(-5px);
    }
    ${ProjectMainIcon} {
      transform: scale(1.1);
    }
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const ProjectLinks = styled.div`
  margin-right: -10px;
  color: ${colors.dimText};
`

const ProjectIconLinks = styled.a`
  position: relative;
  top: 0;
  padding: 10px;
  transition: all 0.2s ease;
  svg {
    width: 24px;
    height: 24px;
  }
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`

const ProjectName = styled.h3`
  margin: 0 0 10px;
  font-size: 24px;
  color: ${colors.light};
`

const ProjectDescription = styled.div`
  font-size: 16px;
  color: ${colors.dimText};
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    color: ${colors.dimText};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.dimText};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.dimText} !important;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.light};
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 0.5;
    }
  }
`

const ProjectTechUsed = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-size: 12px;
    color: ${colors.dimText};
    opacity: 0.7;
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export default Projects
