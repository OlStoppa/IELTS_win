import React from 'react'
import Navbar from './navbar'

const Drawer = (props) => {
    return (
        <div className={props.isOpen ? "drawer open" : "drawer"}>
            <h3>IELTS WIN</h3>
            <Navbar 
                mobile={true}
            />
        </div>
    )
}

export default Drawer