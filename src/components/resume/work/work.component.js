import React from "react"
import TimelineItem from "../timeline-item/timeline-item.component"
import "./work.styles.scss"

const Work = () => {
  return (
    <div className="experience">
      <div className="work-title">
        <h4>Experience</h4>
      </div>
      <div className="work-timeline">
        <TimelineItem
          title="NOMIT - Full Stack Developer"
          years="2018 - 2020"
          description="Collaborated with a team of 4 people in the development of
                    multiple API using NodeJS and Progressive Web Application
                    (PWA) using AngularJS. Managed to create a product from
                    scratch called WISP (Working-holiday & International Student
                    Internship Platform) which is a website with a mobile
                    application that helps temporary visa holders to find
                    internships with Australia based companies as a first step
                    for job connections."
        />
        <TimelineItem
          title="LIFX - Cloud Developer"
          years="2018"
          description="Cooperated with a team of 5 people in developing and hardening all
              API using Go Programming Language. Created an automated testing
              tool to help find bugs in all API which facilitate the company in
              cutting down the time for testing. Write clean and reusable code
              to achieve easy testing and deployment."
        />
      </div>
    </div>
  )
}

export default Work
