import React, { useEffect, useRef } from "react"
import SectionTitle from "../title-section/title-section.component"
import ContactForm from "./form/form.component"
import Info from "./info/info.component"
import styled from "styled-components"
import media from "@styles/media"
import sr from "@utils/sr"
import srConfig from "@utils/srConfig"

const Contact = ({ data }) => {
  const {
    frontmatter: { form, info },
  } = data.nodes[0]
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <ContactSection id="contact" ref={revealContainer}>
      <ContactContainer>
        <SectionTitle
          firstPart="Get In"
          secondPart="Touch"
          description="Feel Free To Contact Me Any Time."
        />
        <ContactParts>
          <ContactForm form={form} />
          <Info info={info} />
        </ContactParts>
      </ContactContainer>
    </ContactSection>
  )
}

// Styles

const ContactSection = styled.section`
  padding: 100px 120px 100px;
  ${media.bigDesktop`
      padding: 100px 100px;
  `}
`
const ContactContainer = styled.div`
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
`
const ContactParts = styled.div`
  padding-top: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  ${media.desktop`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`
export default Contact
