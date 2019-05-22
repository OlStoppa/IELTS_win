import React from "react"
import BareLayout from "../components/bareLayout"

const ContactPage = () => (
  <BareLayout>
    <div className="contact-page">
      
      <div className="contact-page__header"><h1>Contact Us</h1></div>
      <div className="contact-page__body">
          <div className="contact-page__image--container">
              <h4>Please contact us with any questions about our services or requests for one to one skype lessons.</h4>
            <h4>We will get back to you by e-mail as soon as possible.</h4>
          </div>
          <div className="contact-page__form--container">
              <form>
                  <input placeholder="Name"/>
                  <input placeholder="Your Email"/>
                  <textarea placeholder="Message"/>
                  <button>SUBMIT</button>
              </form>
          </div>
      </div>
    </div>
  </BareLayout>
)

export default ContactPage
