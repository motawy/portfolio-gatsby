import styled from "styled-components"
import media from "./media"

export const SectionHero = styled.section`
  padding: 30px 20px 0;
  background-color: #eee;
  height: 100vh;
  ${media.desktop`padding: 30px 20px 0`}
`
export const Wrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.desktop`height: 746px`}
  ${media.desktop`z-index: 1`}
`

export const HeroTitle = styled.div`
  margin-top: 150px;
  h4 {
    font-size: 28px;
    font-weight: 300;
    ${media.tablet`font-size: 20px`}
  }
  h1 {
    color: #111;
    text-transform: uppercase;
    font-size: 100px;
    position: relative;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 300;
    ${media.giant`font-size: 80px`}
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 3px;
      background-color: #111;
      left: -48px;
      top: -120px;
      transform: rotate(90deg);
      ${media.giant`display:none`}
    }
  }
  span {
    color: #635628;
  }
`

export const HeroPhrase = styled.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 300;
  text-align: right;
  ${media.tablet`font-size: 20px`}
`

export const HeroButton = styled.div`
  margin-top: 100px;
  ${media.giant`margin-top: 50px`}
  ${media.smallTablet`margin-top: 50px`}
`

export const ContactButton = styled.button`
  cursor: pointer;
  border: 1px solid #111;
  border-radius: 25px;
  padding: 15px 25px;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: #111;
  font-weight: 500;
  font-size: 15px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  ${media.giant`font-size: 13px`}

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f2d367;
    border-color: #f2d367;
  }

  svg {
    margin-right: 5px;
    font-size: 14px;
  }
`
