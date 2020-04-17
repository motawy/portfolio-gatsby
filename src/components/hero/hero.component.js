import React from "react"
import { FaPlus } from "react-icons/fa"
import jump from "jump.js"
import {
  SectionHero,
  Wrapper,
  HeroTitle,
  HeroButton,
  HeroPhrase,
  ContactButton,
} from "../../styles/hero"

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
          <ContactButton
            aria-label="Go to the contact section"
            onClick={() => jump("#contact")}
          >
            <FaPlus /> {heroContactButton}
          </ContactButton>
        </HeroButton>
      </Wrapper>
    </SectionHero>
  )
}

export default Hero
