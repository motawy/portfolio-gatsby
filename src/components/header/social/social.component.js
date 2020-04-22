import React from "react"
import { FaGithub, FaLinkedin, FaMediumM, FaCodepen } from "react-icons/fa"
import styled from "styled-components"
import Colors from "@config/colors.yml"

const Social = ({ size }) => {
  return (
    <>
      <SocialItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          href="https://github.com/motawy"
        >
          <FaGithub size={size} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          href="https://www.linkedin.com/in/mohammed-tantawy"
        >
          <FaLinkedin size={size} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Medium"
          href="https://www.medium.com/@mtantawy.mido"
        >
          <FaMediumM size={size} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://codepen.io/m3trajetta"
          rel="noopener noreferrer"
          title="CodePen"
        >
          <FaCodepen size={size} />
        </a>
      </SocialItem>
    </>
  )
}

const SocialItem = styled.li`
  color: ${Colors.light};
  list-style: none;
  margin-bottom: 24px;
  font-size: 16px;
  text-align: center;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.5s ease;
  a {
    text-decoration: none;
    color: ${Colors.light};
  }

  a:hover {
    color: ${Colors.accent};
  }

  &:hover {
    -webkit-transform: scale(1.7, 1.7);
    -ms-transform: scale(1.7, 1.7);
    transform: scale(1.7, 1.7);
  }
`

export default Social
