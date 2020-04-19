import React from "react"
import Menu from "./menu.component"
import styled from "styled-components"
import colors from "@config/colors.yml"
import media from "@styles/media"

const BurgerMenu = () => {
  const handleClick = () => {
    const menu = document.querySelector(".menu")
    const closeBtn = document.querySelector(".close_btn")
    const buttons = document.querySelectorAll(".nav button")
    if (menu.style.visibility === "") menu.style.visibility = "hidden"

    if (menu.style.visibility === "hidden") {
      menu.style.visibility = "visible"
      menu.style.opacity = 1
    }

    closeBtn.addEventListener("click", () => {
      menu.style.visibility = "hidden"
      menu.style.opacity = 0
    })

    for (const button of buttons) {
      button.addEventListener("click", () => {
        menu.style.visibility = "hidden"
        menu.style.opacity = 0
      })
    }
  }

  return (
    <>
      <BurgerContainer
        className="burger-menu"
        role="button"
        aria-label="Toggle menu"
        id="burger-menu"
        onClick={handleClick}
        onKeyDown={handleClick}
        tabIndex="0"
      >
        <BurgerBox></BurgerBox>
      </BurgerContainer>
      <Menu />
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
