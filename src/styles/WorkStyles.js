import styled from "styled-components"
import media from "./media"

export const Container = styled.section`
  margin-top: 150px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
`

export const Tabs = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.smallTablet`display: block;`};
`

export const TabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;

  ${media.smallTablet`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${media.bigPhone`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};

  li {
    &:first-of-type {
      ${media.smallTablet`
        margin-left: 50px;
      `};
      ${media.bigPhone`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.smallTablet`
        padding-right: 50px;
      `};
      ${media.bigPhone`
        padding-right: 25px;
      `};
    }
  }
`

export const TabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: 42px;
  padding: 0 20px 2px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-left: 2px solid #eee;
  text-align: left;
  white-space: nowrap;
  color: ${props => (props.isActive ? "#eee" : "#333")};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.smallTablet`
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid #eee;
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: #333;
    outline: 0;
  }
`

export const Highlight = styled.span`
  display: block;
  background: #333;
  width: 2px;
  height: 42px;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * 42 : 0)}px
  );
  ${media.smallTablet`
    width: 100%;
    max-width: 120px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * 120 : 0)}px
    );
    margin-left: 50px;
  `};
  ${media.bigPhone`
    margin-left: 25px;
  `};
`

export const TabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  ${media.tablet`padding-left: 20px;`};
  ${media.bigPhone`padding-left: 0;`};

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #eee;
      }
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    color: #333;
    &:hover,
    &:focus,
    &:active {
      color: #333;
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: #333 !important;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: #eee;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 0.5;
    }
  }
`

export const WorkTitle = styled.h4`
  color: #eee;
  font-weight: 500;
  margin-bottom: 5px;
`

export const Company = styled.span`
  color: #eee;
`

export const WorkDetails = styled.h5`
  font-weight: normal;
  letter-spacing: 0.05em;
  color: #333;
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`
