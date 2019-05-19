import React from 'react'

const MenuBtn = (props) => {
    return (
        <div className={props.isOpen ? 'menu-btn close' : 'menu-btn'} onClick={props.toggleDrawer}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>
    )}

    export default MenuBtn