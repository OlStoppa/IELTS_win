import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
    <div className="navbar">
  <ul>
    <li>
    <div className='icon-box'><span>WRITING</span><span className="material-icons">arrow_drop_down</span></div>
      <ul>
        <Link>
        <li>
          Writing Correction
        </li>
        </Link>
        <li>
          <Link>Task 1</Link>
        </li>
        <li>
          <Link>Task 2</Link>
        </li>
        <li>
          <Link>Happy Days</Link>
        </li>
      </ul>
    </li>
    <li>
    <div className='icon-box'>READING<span className="material-icons">arrow_drop_down</span></div>
    <ul>
        <li>
          <Link>Writing Correction</Link>
        </li>
        <li>
          <Link>Task 1</Link>
        </li>
        <li>
          <Link>Task 2</Link>
        </li>
        <li>
          <Link>Happy Days</Link>
        </li>
      </ul>
    </li>
    <li>
    <div className='icon-box'>LISTENING<span className="material-icons">arrow_drop_down</span></div>
    <ul>
        <li>
          <Link>Writing Correction</Link>
        </li>
        <li>
          <Link>Task 1</Link>
        </li>
        <li>
          <Link>Task 2</Link>
        </li>
        <li>
          <Link>Happy Days</Link>
        </li>
      </ul>
    </li>
    <li>
    <div className='icon-box'>SPEAKING<span className="material-icons">arrow_drop_down</span></div>
    <ul>
        <li>
          <Link>Writing Correction</Link>
        </li>
        <li>
          <Link>Task 1</Link>
        </li>
        <li>
          <Link>Task 2</Link>
        </li>
        <li>
          <Link>Happy Days</Link>
        </li>
      </ul>
    </li>
  </ul>
  </div>
)

export default Navbar
