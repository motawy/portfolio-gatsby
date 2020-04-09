import React from "react"
import { FaPlus } from "react-icons/fa"
import "./form.styles.scss"

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form-title">
        <span>How can I help you ?</span>
      </div>
      <div className="form-subtitle">
        <span>Fill out this form we'll contact back shortly.</span>
      </div>
      <div className="form">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
            />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Type your messages"
            ></textarea>
          </label>
          <div className="btn__send">
            <button type="submit" id="btn_submit">
              <FaPlus size="24px" />
              <span> Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
