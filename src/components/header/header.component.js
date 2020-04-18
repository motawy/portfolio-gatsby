import React from "react"
import styled from "styled-components"
import SocialLinks from "./social-links/social-links.components"
import BurgerMenu from "./menu/burger-menu.component"
import media from "@styles/media"
import NavYML from "@config/nav.yml"
import Colors from "@config/colors.yml"

const Header = () => {
  return (
    <NavPart>
      <Wrapper>
        <Logo>
          <a href="/" title="MIDO - Portfolio" id="logoHeader">
            Mido.
          </a>
        </Logo>
        <NavContainer>
          <NavList>
            {NavYML &&
              NavYML.navLinks.map(({ name, url }, key) => {
                return (
                  <NavListItem key={key}>
                    <NavLink href={url}>{name}</NavLink>
                  </NavListItem>
                )
              })}
          </NavList>
        </NavContainer>
        <BurgerMenu />
        <SocialLinks />
      </Wrapper>
    </NavPart>
  )
}

// Styles

const NavPart = styled.header`
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 0px 50px;
  width: 100%;
  height: 80px;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`
const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 700;
    font-size: 40px;
    font-family: "SignPainter";
    line-height: 48px;
    color: ${Colors.primaryColor};
    text-decoration: none;
  }
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`

const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: 16px;
`

const NavLink = styled.a`
  padding: 12px 10px;
  text-decoration: none;
  color: ${Colors.primaryColor};
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${Colors.accentColor},
    ${Colors.accentColor} 50%,
    ${Colors.primaryColor} 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    background-position: 0 100%;
    -webkit-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
`

export default Header
