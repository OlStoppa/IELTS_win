import React from "react"
import { Link } from "gatsby"
import Image from '../components/image'
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/writing-test">
    <div className="writing-link--outer">
    <div className="writing-link">
    
      
    </div>
    </div>
    </Link>
    <hr/>
    <hr/>
    <h2>Welcome to IELTS XL.</h2>
    <p>The IELTS is hard. Especially if you need to get a high band score. An experienced IELTS tutor can be a great help but can also be very expensive. Our mission at IELTSXL.com is to give you access to great free content to help you practice and improve.</p>
    <p>We have compiled a lot of practice tests to check your progress. This is easy to do for the listening and reading sections, as you can check your own answers. Test takers often find it very difficult to evaluate their performance in the speaking and writing sections.</p>
    <h2>Here's the good news...</h2>
    <p>We have tutored IELTS candidates from all over the world for many years and it is clear to us the the main reason people feel they need a tutor is to give them reliable correction and feedback in their writing and speaking. Here at IELTS WIN, we not only offer great free lessons and practice content, but also affordable feedback and grading services that you can use at any time during your IELTS journey.</p>
    <h3>Try our writing practice tests</h3>
    <ul>
      <li>You can submit your test for grading by one of our experienced IELTS tutors.</li>
      <li><Link to="/writing-correction-service">Check out an example of the kind of feedback and correction we offer.</Link></li>

    </ul>
    <div>
      <h3>How It Works</h3>
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
            <Link to="/writing-test"><div className="button">Try It Now</div></Link>
            <Link to ="/writing-correction-service" ><div className="button">Find Out More</div></Link>
          </ul>
        </div>
      </div>
    </div>
    
    
  </Layout>
)

export default IndexPage
