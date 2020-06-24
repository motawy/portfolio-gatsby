import React from "react"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-scroll"
import styled from "styled-components"
import colors from "@config/colors/index.yml"
import media from "@styles/media"

const Hero = ({ data }) => {
  const { frontmatter } = data.nodes[0]
  const { heroStart, heroName, heroContactButton, heroPhrase } = frontmatter

  return (
    <SectionHero id="home">
      <Wrapper>
        <HeroTitle>
          <h4>{heroStart}</h4>
          <h1>{heroName}</h1>
          <HeroPhrase>{heroPhrase}</HeroPhrase>
        </HeroTitle>
        <HeroButton>
          <ContactButton to="contact" spy={true} smooth={true} duration={1000}>
            <FaPlus /> {heroContactButton}
          </ContactButton>
        </HeroButton>
      </Wrapper>
    </SectionHero>
  )
}

// Styles

const SectionHero = styled.section`
  padding: 0;
  color: ${colors.light};
  height: 100vh;
`

const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.desktop`height: 746px`}
  ${media.desktop`z-index: 1`}
`

const HeroTitle = styled.div`
  margin-top: 150px;
  ${media.tablet`
    margin-top: 240px;
  `}
  h4 {
    font-size: 28px;
    font-weight: 300;
    ${media.bigDesktop`font-size: 20px`}
    ${media.desktop`font-size: 18px`}
    ${media.tablet`font-size: 14px`}
  }
  h1 {
    color: ${colors.accent};
    font-size: 180px;
    position: relative;
    margin-top: -16px;
    margin-bottom: -32px;
    font-weight: 300;
    font-family: SignPainter, sans-serif;
    white-space: nowrap;
    ${media.bigDesktop`font-size: 140px`}
    ${media.desktop`
        font-size: 120px;
        margin-top: 0;
        margin-bottom: -16px;
    `}
    ${media.tablet`font-size: 96px`}
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 3px;
      background-color: ${colors.light};
      left: -48px;
      top: -120px;
      transform: rotate(90deg);
      ${media.giant`display:none`}
    }
  }
  span {
    color: ${colors.accent};
  }
`

const HeroPhrase = styled.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 300;
  ${media.bigDesktop`font-size: 20px`}
  ${media.desktop`font-size: 18px`}
  ${media.tablet`font-size: 14px`}
`

const HeroButton = styled.div`
  margin-top: 28px;
  ${media.giant`margin-top: 50px`}
`

const ContactButton = styled(Link)`
  cursor: pointer;
  border: 1px solid ${colors.accent};
  border-radius: 25px;
  padding: 15px 25px;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.accent};
  background-color: ${colors.dark};
  font-weight: 500;
  font-size: 15px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  ${media.giant`font-size: 13px`}

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${colors.dark};
    background-color: ${colors.accent};
    border-color: ${colors.accent};
    transform: translateY(-4%);
  }

  svg {
    margin-right: 5px;
    font-size: 14px;
  }
`

export default Hero
