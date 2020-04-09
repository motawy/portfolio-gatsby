import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const { site } = useStaticQuery(query)
  const { title, description, author, url } = site.siteMetadata
  const seo = {
    title: title,
    description: description,
    author: author,
    url: url,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  author: null,
  url: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        url
      }
    }
  }
`
