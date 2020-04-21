import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import colors from "@config/colors.yml"
import { FaGithub } from "react-icons/fa"

const Element = ({ link, image, title, description, tech }) => {
  const [hover, setHover] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <ImageBox className="imgBox">
        <ImageContent fluid={image} hover={hover} />
      </ImageBox>
      <Content hover={hover}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <TechUser>
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </TechUser>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaGithub color={colors.accent} size="32px" />
        </a>
      </Content>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${colors.dark};
  transition: 0.5s;

  ${({ hover }) =>
    hover &&
    `&:after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${colors.accent};
    z-index: -2;
    filter: blur(8px);
  }`}
`

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const ImageContent = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  transition: 0.5s;
  ${({ hover }) => hover && `opacity: 1;`}
`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  transition-delay: 0.2s;
  ${({ hover }) => hover && `visibility: visible; opacity: 1;`}
  h2 {
    color: ${colors.accent};
  }
  h4 {
    font-weight: 300;
    margin-bottom: 16px;
  }
  a {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 16px;
  }
`

const TechUser = styled.div`
  display: flex;
  flex-direction: row;
  span {
    margin: 8px;
    background-color: ${colors.accent};
    color: ${colors.bgDark};
    padding: 5px 10px;
    border-radius: 20px;
  }
`

export default Element
