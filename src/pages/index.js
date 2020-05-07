import React from "react"
import Layout from "../components/layout/layout.component"
import About from "../components/sections/about"
import Hero from "../components/hero/hero.component"
import Resume from "../components/resume/resume.component"
import Projects from "../components/sections/projects"
import Portfolio from "../components/sections/portfolio"
import Contact from "../components/contact/contact.component"
import Footer from "../components/footer/footer.component"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.hero} />
    <About data={data.about} />
    <Resume data={data.resume} />
    <Portfolio data={data.portfolio} />
    <Projects data={data.projects} />
    <Contact data={data.contact} />
    <Footer />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      nodes {
        frontmatter {
          heroContactButton
          heroShortBio
          heroIam
          heroName
          heroStart
          heroPhrase
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      nodes {
        frontmatter {
          aboutTitle
          aboutSkills
          aboutImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        html
      }
    }
    resume: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resume/" } }
    ) {
      nodes {
        frontmatter {
          education {
            description
            title
            years
          }
          work {
            description
            title
            years
          }
        }
      }
    }
    portfolio: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/my-work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          techUsed
          github
          external
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        html
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/my-projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          techUsed
          github
          hosted
        }
        html
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      nodes {
        frontmatter {
          form {
            button
            subtitle
            title
          }
          info {
            email
            location
            subtitle
            title
          }
        }
      }
    }
  }
`

export default IndexPage
