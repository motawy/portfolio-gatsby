import React from "react"
import Social from "../social/social.component"
import { Link } from "react-scroll"
import navigation from "@config/nav.yml"
import styled from "styled-components"
import colors from "@config/colors.yml"
import media from "@styles/media"

const Menu = () => {
  return (
    <MenuContainer className="menu">
      <MenuWrap>
        <MenuNav className="nav">
          <MenuNavList>
            {navigation &&
              navigation.navLinks.map(({ name, url, offset }, key) => {
                return (
                  <li key={key}>
                    <MenuButton
                      to={url}
                      spy={true}
                      offset={offset}
                      smooth={true}
                      duration={500}
                    >
                      {name}
                    </MenuButton>
                  </li>
                )
              })}
          </MenuNavList>
        </MenuNav>
        <MenuAnchorList>
          <Social size="32" />
        </MenuAnchorList>
      </MenuWrap>
      <CloseButton className="close_btn">
        <span></span>
      </CloseButton>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -20px;
  left: 30px;
  padding: 0;
  margin: 0;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  background-color: ${colors.dark};
  z-index: 1;
  display: none;
  ${media.tablet`display: flex;`};
`
const MenuWrap = styled.div`
  display: flex;
  ${media.tablet`
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  `}
`

const MenuNav = styled.nav`
  text-align: center;
  padding-right: 200px;
  ${media.tablet`
      padding-right: 0;
      padding-bottom: 40px;
  `}
`

const MenuNavList = styled.ul`
  list-style: none;
  li {
    list-style: none;
    margin-bottom: 20px;
  }
`

const MenuButton = styled(Link)`
  cursor: pointer;
  border: none;
  text-decoration: none;
  background-color: transparent;
  color: ${colors.light};
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${colors.accent};
    -webkit-transform: scale(1.5, 1.5);
    -ms-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
  }
`

const MenuAnchorList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  padding-top: 10px;
  padding-left: 0;

  li {
    margin-right: 20px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    a {
      text-decoration: none;
      color: ${colors.light};
    }

    &:hover > a {
      color: ${colors.accent};
    }

    &:hover {
      -webkit-transform: scale(1.5, 1.5);
      -ms-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
    }
  }
`

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  top: 20px;
  right: 30px;
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;

  span {
    width: 24px;
    height: 2px;
    display: block;
    position: relative;
    background: transparent;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    background: #fff;
    width: 24px;
    height: 2px;
  }

  &:before {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &:after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
export default Menu
