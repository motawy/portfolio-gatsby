import React, { useState, useRef, useEffect } from "react"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"
import {
  Container,
  Tabs,
  TabList,
  TabButton,
  Highlight,
  TabContent,
  WorkTitle,
  Company,
  WorkDetails,
} from "@styles/WorkStyles"

const Work = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([])
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])
  const { frontmatter } = data.nodes[0]
  const { work } = frontmatter
  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus()
    } else {
      // If we're at the end, go to the start
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0)
      }
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1)
      }
    }
  }

  // Only re-run the effect if tabFocus changes
  useEffect(
    () => focusTab(),
    // eslint-disable-next-line
    []
  )

  const onKeyPressed = e => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault()
      if (e.keyCode === 40) {
        // Move down
        setTabFocus(tabFocus + 1)
      } else if (e.keyCode === 38) {
        // Move up
        setTabFocus(tabFocus - 1)
      }
    }
  }
  return (
    <Container id="jobs" ref={revealContainer}>
      <h3>Past experiences</h3>
      <Tabs>
        <TabList
          role="tablist"
          aria-label="Jobs tab"
          onKeyDown={e => onKeyPressed(e)}
        >
          {work &&
            work.map((item, key) => {
              return (
                <li key={key}>
                  <TabButton
                    isActive={activeTabId === key}
                    onClick={() => setActiveTabId(key)}
                    ref={item => (tabs.current[key] = item)}
                    id={`tab-${key}`}
                    role="tab"
                    aria-selected={activeTabId === key}
                    aria-controls={`panel-${key}`}
                    tabIndex={activeTabId === key ? "0" : "-1"}
                  >
                    <span>{item.title}</span>
                  </TabButton>
                </li>
              )
            })}
          <Highlight activeTabId={activeTabId} />
        </TabList>

        {work &&
          work.map((item, key) => {
            return (
              <TabContent
                key={key}
                isActive={activeTabId === key}
                id={`panel-${key}`}
                role="tabpanel"
                aria-labelledby={`tab-${key}`}
                tabIndex={activeTabId === key ? "0" : "-1"}
                hidden={activeTabId !== key}
              >
                <WorkTitle>
                  <span>{item.title}</span>
                  <Company>Miao</Company>
                </WorkTitle>

                <WorkDetails>
                  <span>{item.years}</span>
                  <div>{item.description}</div>
                </WorkDetails>
              </TabContent>
            )
          })}
      </Tabs>
    </Container>
  )
}

export default Work
