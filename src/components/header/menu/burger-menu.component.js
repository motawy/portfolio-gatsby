import React, { useState } from "react"
import Menu from "./menu.component"
import styled from "styled-components"
import colors from "@config/colors/index.yml"
import media from "@styles/media"

const BurgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)
  return (
    <>
      <BurgerContainer
        role="button"
        aria-label="Toggle menu"
        id="burger-menu"
        onClick={() => toggleMenu()}
        onKeyDown={() => toggleMenu()}
        tabIndex="0"
      >
        <BurgerBox />
      </BurgerContainer>
      <Menu isMenuOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </>
  )
}

const BurgerContainer = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;
  transition: 0.3s;
  &:focus {
    outline: 0;
  }
  ${media.tablet`display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  `};
`

const BurgerBox = styled.div`
  width: 24px;
  height: 2px;
  display: block;
  position: relative;
  background-color: ${colors.light};
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    background-color: ${colors.light};
    width: 24px;
    height: 2px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border-radius: 4px;
  }

  &:before {
    top: -9px;
  }

  &:after {
    bottom: -9px;
  }
`

export default BurgerMenu
