import React, { useState } from "react"
import { FaRegPaperPlane } from "react-icons/fa"
import styled from "styled-components"
import colors from "@config/colors/index.yml"
import media from "@styles/media"

const ContactForm = ({ form }) => {
  const [values, setValues] = useState({ name: "", email: "", message: "", botField: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")

  const validate = () => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = "Please enter your name"
    if (!values.email.trim()) nextErrors.email = "Please enter your email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Enter a valid email"
    if (!values.message.trim()) nextErrors.message = "Please enter a message"
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return
    if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
      setSubmitted(true)
      setValues({ name: "", email: "", message: "", botField: "" })
      setErrors({})
      return
    }
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name: values.name, email: values.email, message: values.message, "bot-field": values.botField }),
      })
      setSubmitted(true)
      setValues({ name: "", email: "", message: "", botField: "" })
      setErrors({})
    } catch (err) {
      setErrors({ submit: "Something went wrong. Please try again later." })
    }
  }

  return (
    <FormContainer>
      <Title>
        <span>{form.title}</span>
      </Title>
      <Subtitle>
        <span>{form.subtitle}</span>
      </Subtitle>
      <Form className="form">
        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" value={values.botField} onChange={handleChange} />
          <label htmlFor="name" aria-label="Name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
          {errors.name && <div id="winError">{errors.name}</div>}
          <label htmlFor="email" aria-label="Email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
          {errors.email && <div id="winError">{errors.email}</div>}
          <label htmlFor="message" aria-label="Message">
            <textarea
              name="message"
              id="message"
              placeholder="Type your messages"
              value={values.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          {errors.message && <div id="winError">{errors.message}</div>}
          {errors.submit && <div id="winError">{errors.submit}</div>}
          {submitted && (
            <SuccessMsg role="status" aria-live="polite">Thanks! Your message has been sent.</SuccessMsg>
          )}
          <div className="btn__send">
            <SubmitButton
              aria-label="Send message"
              type="submit"
              id="btn_submit"
            >
              <FaRegPaperPlane size="24px" />
              <span>{form.button}</span>
            </SubmitButton>
          </div>
        </form>
      </Form>
    </FormContainer>
  )
}

// Styles

const FormContainer = styled.div`
  flex: 1;
  ${media.desktop`
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    margin-top: 40px;  
  `}
`
const Title = styled.div`
  margin-bottom: 16px;
  span {
    color: ${colors.light};
    font-size: 24px;
    font-weight: 600;
  }
`
const Subtitle = styled.div`
  span {
    color: ${colors.dimText};
    font-size: 0.9rem;
    line-height: 24px;
  }
`
const Form = styled.div`
  padding-top: 40px;
  padding-right: 40px;
  form {
    input {
      color: ${colors.light};
      background: none;
      border: none;
      outline: none;
      width: 100%;
      padding-bottom: 15px;
      border-bottom: 1px solid ${colors.accent};
      margin-bottom: 30px;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #fff inset !important;
        box-shadow: 0 0 0 30px #fff inset !important;
      }
    }
    textarea {
      color: ${colors.light};
      background: none;
      border: none;
      outline: none;
      width: 100%;
      min-height: 100px;
      border-bottom: 1px solid ${colors.accent};
      margin-bottom: 30px;
      resize: vertical;
    }
    #winError {
      padding-bottom: 10px;
      color: #f03e3e;
    }
    ${media.tablet`
        padding-right: 0;
        form {
          input {
            width: 100%;
          }
          textarea {
            width: 100%;
          }
        }
    `}
  }
`
const SubmitButton = styled.button`
  cursor: pointer;
  border: 1px solid ${colors.accent};
  border-radius: 25px;
  padding: 15px 25px;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.accent};
  background-color: ${colors.dark};
  font-weight: 500;
  font-size: 15px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  ${media.giant`font-size: 13px`}

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${colors.dark};
    background-color: ${colors.accent};
    border-color: ${colors.accent};
    transform: translateY(-4%);
  }
  svg {
    padding-right: 8px;
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
`
const SuccessMsg = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${colors.accent};
  font-weight: 500;
`
export default ContactForm
