import React from 'react'
import CollapseNav from './collapseNav'
import {Link} from 'gatsby'

const Drawer = (props) => {
    return (
        <div className={props.isOpen ? "drawer open" : "drawer"}>
            <h3>IELTS WIN</h3>
            <div className="mobile-nav-container">
                <ul>
                <CollapseNav 
                    item={'Writing'}
                >
                    <ul>
                        <Link><li>Writing Correction</li></Link>
                        <Link><li>Writing Tips</li></Link>
                        <Link><li>Task 1</li></Link>
                        <Link><li>Task 2</li></Link>
                    </ul>
                </CollapseNav>
                <CollapseNav 
                    item={'Writing'}
                >
                    <ul>
                        <Link><li>Writing Correction</li></Link>
                        <Link><li>Writing Tips</li></Link>
                        <Link><li>Task 1</li></Link>
                        <Link><li>Task 2</li></Link>
                    </ul>
                </CollapseNav>
                </ul>
            
            </div>
        </div>
    )
}

export default Drawer