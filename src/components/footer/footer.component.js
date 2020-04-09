import React from "react"
import { FaReact } from "react-icons/fa"
import "./footer.styles.scss"

const Footer = () => {
  return (
    <footer className="footer" data-testid="test-footer">
      <span>
        &copy; 2020 Mido. Made with <FaReact size="24px" />
      </span>
    </footer>
  )
}

export default Footer
