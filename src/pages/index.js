import React from "react"
import Layout from "../components/layout/layout.component"
import About from "../components/about/about.component"
import Hero from "../components/hero/hero.component"
// import Resume from "../components/resume/resume.component"
import Work from "../components/sections/work"
import Portfolio from "../components/portfolio/portfolio.component"
import Contact from "../components/contact/contact.component"
import Footer from "../components/footer/footer.component"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.hero} />
    <About data={data.about} />
    {/* <Resume data={data.resume} /> */}
    <Work data={data.resume} />
    <Portfolio data={data.portfolio} />
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
    portfolio: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/my-work/" } }
    ) {
      nodes {
        frontmatter {
          myWork {
            title
            techUsed
            shortDescription
            link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
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
