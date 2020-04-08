import React from "react"
import Menu from "./menu.component"
import "./burger-menu.styles.scss"

const BurgerMenu = () => {
  const handleClick = () => {
    const menu = document.querySelector(".menu")
    const closeBtn = document.querySelector(".close_btn")
    const buttonA = document.querySelector(".nav a")
    if (menu.style.visibility === "") menu.style.visibility = "hidden"

    if (menu.style.visibility === "hidden") {
      menu.style.visibility = "visible"
      menu.style.opacity = 1
    }

    closeBtn.addEventListener("click", () => {
      menu.style.visibility = "hidden"
      menu.style.opacity = 0
    })

    buttonA.addEventListener("click", () => {
      menu.style.visibility = "hidden"
      menu.style.opacity = 0
    })
  }

  return (
    <div>
      <div
        className="burger-menu"
        role="button"
        id="burger-menu"
        onClick={handleClick}
        onKeyDown={handleClick}
        tabIndex="0"
      >
        <span></span>
      </div>
      <Menu />
    </div>
  )
}

export default BurgerMenu
