import React from "react"
import Social from "../social/social.component"
import styled from "styled-components"
import media from "@styles/media"
import Colors from "@config/colors.yml"

const SocialLinks = () => {
  return (
    <SocialContainers className="social_links">
      <SocialList>
        <Social size="20" />
      </SocialList>
      <SocialSpan>Find Me</SocialSpan>
    </SocialContainers>
  )
}

const SocialContainers = styled.div`
  position: fixed;
  top: 50%;
  left: 30px;
  margin-top: -100px;
  transform: translateY(-50%);
  ${media.desktop`display:none`}
`

const SocialList = styled.ul`
  list-style: none;
`

const SocialSpan = styled.span`
  top: 270px;
  left: -24px;
  width: 68px;
  height: 20px;
  font-size: 12px;
  line-height: 1.2;
  white-space: nowrap;
  position: absolute;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  color: ${Colors.primaryColor};

  &:after {
    content: "";
    top: 9px;
    right: -48px;
    width: 40px;
    height: 1px;
    display: block;
    position: absolute;
    background-color: ${Colors.primaryColor};
  }
`

export default SocialLinks
