import React, { useEffect, useRef } from "react"
import Education from "./education/education.component"
import Work from "./work/work.component"
import TitleSection from "../title-section/title-section.component"
import styled from "styled-components"
import media from "@styles/media"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"

const Resume = ({ data }) => {
  const { frontmatter } = data.nodes[0]
  const { education, work } = frontmatter
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <ResumeSection id="resume" ref={revealContainer}>
      <ResumeWrapper>
        <TitleSection
          firstPart="My"
          secondPart="Resume"
          description="My path up to date."
        />
        <ResumeMain>
          <Education education={education} />
          <Work work={work} />
        </ResumeMain>
      </ResumeWrapper>
    </ResumeSection>
  )
}

const ResumeSection = styled.section`
  padding: 0 120px;
  ${media.bigDesktop`
      padding: 0 100px;
  `}
`

const ResumeWrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
`

const ResumeMain = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 80px 10px 0 0;
  ${media.tablet`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`

export default Resume
