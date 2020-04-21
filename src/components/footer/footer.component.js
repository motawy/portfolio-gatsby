import React from "react"
import { FaReact } from "react-icons/fa"
import styled from "styled-components"
import colors from "@config/colors.yml"

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        &copy; 2020{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          href="https://github.com/motawy"
        >
          Mido.
        </a>{" "}
        Made with <FaReact size="24px" />
      </span>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${colors.bgDark};
  text-align: center;
  padding: 40px 0;
  a {
    text-decoration: none;
    color: ${colors.light};
    transition: 0.5s;
    &:hover {
      color: ${colors.accent};
    }
  }
  span {
    color: ${colors.light};
    font-weight: 400;
    font-size: 0.8rem;
    display: inline-block;
    vertical-align: middle;
    svg {
      display: inline-block;
      vertical-align: middle;
    }
  }
`

export default Footer
