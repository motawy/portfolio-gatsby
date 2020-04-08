import React from "react"
import Social from "../social/social.component"
import "./social-links.styles.scss"

const SocialLinks = () => {
  return (
    <div className="social_links">
      <ul>
        <Social size="20" />
      </ul>
      <span>Find Me</span>
    </div>
  )
}

export default SocialLinks
