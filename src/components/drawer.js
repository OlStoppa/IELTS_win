import React, { useState } from "react"
import CollapseNav from "./collapseNav"
import { Link } from "gatsby"

const Drawer = props => {
  const initial = [true, false]
  const [[...expandArr], setExpand] = useState(initial)

  const expandItem = clicked => {
    const expandedSwitch = expandArr[clicked]
      ? new Array(expandArr.length).fill(false)
      : expandArr.map((item, index) => index === clicked)

    setExpand(expandedSwitch)
  }

  return (
    <div className={props.isOpen ? "drawer open" : "drawer"}>
      <h3>IELTS WIN</h3>
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
        </ul>
      </div>
    </div>
  )
}

export default Drawer
