import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

export const SiteHead = ({ title, description, image, canonicalPath }) => {
  const { site } = useStaticQuery(graphql`
    query HeadSiteMeta {
      site {
        siteMetadata {
          title
          description
          url
          image
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const pageTitle = title || meta.title
  const pageDescription = description || meta.description
  const pageImage = image ? `${meta.url}${image}` : `${meta.url}${meta.image}`
  const canonical = canonicalPath ? `${meta.url}${canonicalPath}` : meta.url

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </>
  )
}

SiteHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  canonicalPath: PropTypes.string,
}

export default SiteHead
