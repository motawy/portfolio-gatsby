import React from "react"
import { FaRegPaperPlane } from "react-icons/fa"
import styled from "styled-components"
import colors from "@config/colors.yml"
import media from "@styles/media"

const ContactForm = ({ form }) => {
  return (
    <FormContainer>
      <Title>
        <span>{form.title}</span>
      </Title>
      <Subtitle>
        <span>{form.subtitle}</span>
      </Subtitle>
      <Form className="form">
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
      background: none;
      border: none;
      outline: none;
      width: 100%;
      max-width: 500px;
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
export default ContactForm
