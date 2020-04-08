import React from "react"
import { FaGithubAlt, FaTwitter, FaLinkedin, FaMediumM } from "react-icons/fa"

const Social = ({ size }) => {
  return (
    <>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          href="https://github.com/motawy"
        >
          <FaGithubAlt size={size} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          href="https://twitter.com/mohammed_tawy"
        >
          <FaTwitter size={size} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          href="https://www.linkedin.com/in/mohammed-tantawy"
        >
          <FaLinkedin size={size} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Medium"
          href="https://www.medium.com/@mtantawy.mido"
        >
          <FaMediumM size={size} />
        </a>
      </li>
    </>
  )
}

export default Social
