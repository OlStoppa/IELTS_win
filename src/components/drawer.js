import React, { useState } from "react"
import CollapseNav from "./collapseNav"
import { Link } from "gatsby"
import Social from "./social"

const Drawer = props => {
  const initial = [false, false]
  const [[...expandArr], setExpand] = useState(initial)

  const expandItem = clicked => {
    const expandedSwitch = expandArr[clicked]
      ? new Array(expandArr.length).fill(false)
      : expandArr.map((item, index) => index === clicked)

    setExpand(expandedSwitch)
  }

  return (
    <div className={props.isOpen ? "drawer open" : "drawer"}>
      <div className="mobile-nav__header">
      <h3>IELTS XL</h3>
      </div>
      <Social />
      <div className="mobile-nav-container">
        <ul>
          <CollapseNav
            item={"Writing"}
            expand={expandArr[0]}
            expandItem={expandItem}
            index={0}
          >
            <ul>
              <Link to="/writing-correction-service">
                <li>Writing Correction Service</li>
              </Link>
              <Link to="/writing-test">
                <li>Practice Tests</li>
              </Link>
              
            </ul>
          </CollapseNav>
          <CollapseNav
            item={"Speaking"}
            expand={expandArr[1]}
            expandItem={expandItem}
            index={1}
          >
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
          </CollapseNav>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
