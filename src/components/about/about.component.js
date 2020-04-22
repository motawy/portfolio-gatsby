import React, { useEffect, useRef } from "react"
import AboutPersonal from "./about-personal/about-personal.component"
import AboutCV from "./about-cv/about-cv.component"
import AboutText from "./about-text/about-text.component"
import TitleSection from "../title-section/title-section.component"
import styled from "styled-components"
import media from "@styles/media"
import colors from "@config/colors.yml"
import Img from "gatsby-image"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"

const About = ({ data }) => {
  const { frontmatter } = data.nodes[0]
  const { aboutTitle, aboutText, aboutInfo, aboutImage } = frontmatter
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <AboutSection id="about" ref={revealContainer}>
      <AboutWrapper>
        <TitleSection
          firstPart="About"
          secondPart="me"
          description="Software Engineer, based in Australia"
        />
        <AboutContainer>
          <AboutPictureContainer>
            <AboutImage
              fluid={aboutImage.childImageSharp.fluid}
              alt="Avatar of Mido"
            />
          </AboutPictureContainer>
          <AboutInfo>
            <AboutTitle>
              <h3>{aboutTitle}</h3>
            </AboutTitle>
            <AboutText text={aboutText} />
            <AboutPersonal personalInfo={aboutInfo} />
            <AboutCV />
          </AboutInfo>
        </AboutContainer>
      </AboutWrapper>
    </AboutSection>
  )
}

// Styles

const AboutSection = styled.section`
  padding: 0 120px 100px;
  ${media.bigDesktop`
      padding: 0 40px;
  `}
`

const AboutWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
`

const AboutContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 80px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 100px;
  ${media.desktop`
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  `}
`

const AboutPictureContainer = styled.div`
  min-width: 400px;
  width: 400px;
  height: 500px;
  position: relative;
  ${media.bigPhone`
      width: 100%;
      max-width: 400px;
      min-width: 100vw;
      &:before {
        display: none;
      }
  `}

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.accent};
    right: -20px;
    bottom: -20px;
    z-index: 1;
  }
`

const AboutImage = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
  position: absolute;
`

const AboutInfo = styled.div`
  padding-left: 100px;
  ${media.desktop`
      padding-left: 0;
      padding-top: 80px;
  `}
`

const AboutTitle = styled.div`
  h3 {
    color: ${colors.accent};
    font-size: 24px;
    font-weight: 600;
  }
`
export default About
