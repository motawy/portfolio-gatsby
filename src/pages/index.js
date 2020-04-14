import React from "react"
import Layout from "../components/layout/layout.component"
import About from "../components/about/about.component"
import Hero from "../components/hero/hero.component"
import Resume from "../components/resume/resume.component"
import Portfolio from "../components/portfolio/portfolio.component"
import Contact from "../components/contact/contact.component"
import Footer from "../components/footer/footer.component"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.hero} />
    <About data={data.about} />
    <Resume data={data.resume} />
    <Portfolio />
    <Contact />
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
          heroContactText
          heroIam
          heroName
          heroTitle
          heroAvatar {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      nodes {
        frontmatter {
          aboutTitle
          aboutText
          aboutSubtitle
          aboutInfo {
            aboutAge
            aboutEmail
            aboutLocation
            aboutPhone
            aboutStatus
          }
          aboutImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
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
  }
`

export default IndexPage
