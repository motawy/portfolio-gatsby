import React from "react"
import { MdEmail, MdLocationOn } from "react-icons/md"
import styled from "styled-components"
import colors from "@config/colors/index.yml"
import media from "@styles/media"

const Info = ({ info }) => {
  return (
    <InfoContainer>
      <Title>
        <span>{info.title}</span>
      </Title>
      <SubTitle>
        <span>{info.subtitle}</span>
      </SubTitle>
      <BlockInfo>
        <InfoItem>
          <MdLocationOn /> <span>{info.location}</span>
        </InfoItem>
        <InfoItem>
          <MdEmail /> <span>{info.email}</span>
        </InfoItem>
      </BlockInfo>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  flex: 1;
  ${media.desktop`
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  `}
`
const Title = styled.div`
  padding-bottom: 16px;
  span {
    color: ${colors.light};
    font-size: 24px;
    font-weight: 600;
  }
`
const SubTitle = styled.div`
  span {
    color: ${colors.dimText};
    font-size: 0.9rem;
    line-height: 24px;
  }
`
const BlockInfo = styled.div`
  padding-top: 10px;
`
const InfoItem = styled.div`
  margin-top: 16px;
  color: ${colors.accent};
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  span {
    margin-left: 16px;
    font-size: 16px;
    color: ${colors.light};
    vertical-align: middle;
  }
`
export default Info
