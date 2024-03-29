import React from "react"
import { Link, withPrefix } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Oliver from "../images/IMAG0030_1.jpg"
import preview from "../images/preview.jpg"


const WritingCorrectionService = () => (
  <Layout>
    <SEO title="Writing Correction Service" description={`Information on our IELTS writing correction service`} keywords={[`IELTS writing`, `correction` ]}/>
    <h3>About The IELTS XL writing correction band score and feedback service.</h3>
    <h4>This service is managed and reviewed by Oliver Lennon</h4>
    <div className="oliver-container">
      <div className="oliver-image">
      <img className="oliver-img" src={Oliver}/>
      </div>
      <div className="oliver-text">
      <p>Oliver Lennon has over twelve years of experience at tutoring and preparing students for all the major English proficiency tests, including IELTS, TOEFL, and GEPT.</p>
      <p>His ability to help candidates focus on improving their weakest areas has enabled him to aid hundreds of students around the world in attaining the results they require.</p>
      </div>
      
    </div>
    <div className="heading-container">
    <h4>What You Get</h4>
    </div>
    <div className="preview-container">
      <div className="pdf-preview--container">
        <a 
        target="_blank"
        rel="noopener noreferrer"
        href={withPrefix(`/samplecorrectmedical1.pdf`)}
        
        >
          <img src={preview} className="pdf-preview"/>
        </a>
      </div>
      <div className="preview-description">
        <ul>
          <li>An experienced IELTS tutor will provide a detailed and in-depth critique of your essay with a breakdown of estimated band scores.</li>
          <li>The essay will be returned within 48 hours of being sent.</li>
          <li>All errors in structure, grammar and spelling will be corrected.</li>
          <li>You will also be provided with suggestions on language and structure to use to improve your writing and accomplish the task more effectively.</li>
          <li>Comments will add explanation where necessary.</li>
          <li>More comments at the end of the essay tell you how to improve each band criteria</li>
          <li>
            <a 
            target="_blank"
        rel="noopener norefferer"
        href={withPrefix(`/samplecorrectmedical1.pdf`)}>
        See a sample correction
        </a></li>
        </ul>
      </div>
    </div>
    <div className="heading-container">
      <Link to="/writing-test"><div className="button">Try The Correction Service</div></Link>
      <h4>How It Works</h4>
    </div>
    <div className="container__writing-guide">
        <div className="writing-guide__image">
          <Image 
          filename="writing-app.PNG"
        /></div>
        <div className="writing-guide__data">
          <ul>
            <li>Just head over to the writing test section of this site.</li>
            <li>Select a question you want to try, or answer a question you have found somewhere else.</li>
            <li>Type your answer or upload a file.</li>
            <li>Submit your answer and within 48 hours you will receive detailed feedback, corrections and your IELTS band score by email.</li>
            <li><strong>1 correction = £9.99</strong></li>
            <Link to="/writing-test"><div className="button">Try It Now</div></Link>
            
          </ul>
        </div>
      </div>
    
  </Layout>
)

export default WritingCorrectionService
