import React from "react"
import { Link } from "gatsby"

const Navbar = (props) => (
  <div className={props.mobile ? "navbar mobile" : "navbar"}>
    <ul>
      <li>
        <div className="icon-box">
          <span>WRITING</span>
          <span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
          <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          READING<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          LISTENING<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          SPEAKING<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
    </ul>
  </div>
)

export default Navbar
