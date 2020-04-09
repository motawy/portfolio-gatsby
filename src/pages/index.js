import React from "react"
import Layout from "../components/layout/layout.component"
import About from "../components/about/about.component"
import Hero from "../components/hero/hero.component"
import Resume from "../components/resume/resume.component"
import Services from "../components/services/services.component"
import Portfolio from "../components/portfolio/portfolio.component"
import "./index.css"

export default () => (
  <Layout>
    <Hero />
    <About />
    <Resume />
    <Services />
    <Portfolio />
  </Layout>
)
