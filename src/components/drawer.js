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
              <Link>
                <li>Writing Correction</li>
              </Link>
              <Link>
                <li>Writing Tips</li>
              </Link>
              <Link>
                <li>Task 1</li>
              </Link>
              <Link>
                <li>Task 2</li>
              </Link>
            </ul>
          </CollapseNav>
          <CollapseNav
            item={"Writing"}
            expand={expandArr[1]}
            expandItem={expandItem}
            index={1}
          >
            <ul>
              <Link>
                <li>Writing Correction</li>
              </Link>
              <Link>
                <li>Writing Tips</li>
              </Link>
              <Link>
                <li>Task 1</li>
              </Link>
              <Link>
                <li>Task 2</li>
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
