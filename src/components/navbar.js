import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div className= "navbar">
    <ul>
      <li>
        <div className="icon-box">
          <span>WRITING</span>
          <span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
          <Link to="/writing-correction-service">
            <li>Writing Correction Service</li>
          </Link>
          <Link to="/writing-test">
            <li>Practice Tests</li>
          </Link>
          
        </ul>
      </li>
      <li>
        <div className="icon-box">
          READING<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <li>Reading Lessons Coming! </li>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          LISTENING<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <li>Listening Lessons Coming!</li>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          SPEAKING<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link to="/a-cool-ielts-speaking-part-1-strategy">
            <li>Part 1</li>
          </Link>
        <Link to="/tags/part-2">
            <li>Part 2</li>
          </Link>
          <Link to="/tags/speaking">
            <li>Tips</li>
          </Link>
          
          
        </ul>
      </li>
    </ul>
  </div>
)

export default Navbar
