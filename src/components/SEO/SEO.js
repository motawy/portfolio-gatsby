import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const Seo = () => {
  const { site } = useStaticQuery(query)
  const { title, description, author, url, image } = site.siteMetadata
  const { pathname } = useLocation()
  const seo = {
    title: title,
    description: description,
    author: author,
    url: `${url}${pathname}`,
    image: `${url}${image}`,
  }

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.keywords && <meta property="og:keywords" content={seo.keywords} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

Seo.defaultProps = {
  title: null,
  description: null,
  author: null,
  url: null,
  image: null,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        description
        author
        url
        keywords
        image
      }
    }
  }
`
