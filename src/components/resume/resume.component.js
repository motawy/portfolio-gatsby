import React from "react"
import Education from "./education/education.component"
import Work from "./work/work.component"
import TitleSection from "../title-section/title-section.component"
import "./resume.styles.scss"

const Resume = ({ data }) => {
  const { frontmatter } = data.nodes[0]
  const { education, work } = frontmatter
  return (
    <section className="resume" id="resume">
      <div className="wrapper">
        <TitleSection
          firstPart="My"
          secondPart="Resume"
          description="My path up to date."
        />
        <div className="main">
          <Education education={education} />
          <Work work={work} />
        </div>
      </div>
    </section>
  )
}

export default Resume
