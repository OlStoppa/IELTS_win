import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div className="footer">
    <div className="footer-inner">
      <div>
        <h1>IELTS XL</h1>
      { '\u00A9 IELTS XL 2019'}
      </div>
      <div>
      <Link to="/contact">Contact Us</Link>
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div />
    </div>

    
  </div>
)

export default Footer
