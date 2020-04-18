import React from "react"
import { FaGithubAlt, FaTwitter, FaLinkedin, FaMediumM } from "react-icons/fa"
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
          <FaGithubAlt size={size} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          href="https://twitter.com/mohammed_tawy"
        >
          <FaTwitter size={size} />
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
    </>
  )
}

const SocialItem = styled.li`
  color: ${Colors.primaryColor};
  list-style: none;
  margin-bottom: 24px;
  font-size: 16px;
  text-align: center;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  a {
    text-decoration: none;
    color: ${Colors.primaryColor};
  }

  a:hover {
    color: ${Colors.accentColor};
  }

  &:hover {
    -webkit-transform: scale(1.7, 1.7);
    -ms-transform: scale(1.7, 1.7);
    transform: scale(1.7, 1.7);
  }
`

export default Social
