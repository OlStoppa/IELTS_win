import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Welcome to IELTS WIN.</h2>
    <p>The IELTS is hard. Especially if you need to get a high band score. An experienced IELTS tutor can be a great help but can also be very expensive. Our mission at IELTSWIN.com is to give you access to great free content to help you practice and improve.</p>
    <p>We have compiled a lot of practice tests to check your progress. This is easy to do for the listening and reading sections, as you can check your own answers. Test takers often find it very difficult to evaluate their performance in the speaking and writing sections.</p>
    <h2>Here's the good news...</h2>
    <p>We have tutored IELTS candidates from all over the world for many years and it is clear to us the the main reason people feel they need a tutor is to give them reliable correction and feedback in their writing and speaking. Here at IELTS WIN, we not only offer great free lessons and practice content, but also affordable feedback and grading services that you can use at any time during your IELTS journey.</p>
    <h3>Try our writing practice tests</h3>
    <ul>
      <li>You can submit your test for grading by one of our experienced IELTS tutors.</li>
      <li><Link>Check out an example of the kind of feedback and correction we offer.</Link></li>

    </ul>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
