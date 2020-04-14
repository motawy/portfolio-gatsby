import React from "react"
import { FaRegPaperPlane } from "react-icons/fa"
import "./form.styles.scss"

const ContactForm = ({ form }) => {
  return (
    <div className="contact-form">
      <div className="form-title">
        <span>{form.title}</span>
      </div>
      <div className="form-subtitle">
        <span>{form.subtitle}</span>
      </div>
      <div className="form">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <label htmlFor="name" aria-label="Name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
            />
          </label>
          <label htmlFor="email" aria-label="Email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
            />
          </label>
          <label htmlFor="message" aria-label="Message">
            <textarea
              name="message"
              id="message"
              placeholder="Type your messages"
            ></textarea>
          </label>
          <div className="btn__send">
            <button aria-label="Send message" type="submit" id="btn_submit">
              <FaRegPaperPlane size="24px" />
              <span>{form.button}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
