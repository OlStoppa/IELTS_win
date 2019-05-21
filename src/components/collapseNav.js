import React  from 'react'

const CollapseNav = (props) => {
    

    return (
        <div className='mobile-nav__item--container'>
        <li className='mobile-nav__item' onClick={() => props.expandItem(props.index)}>{props.item}<span className={props.expand ? 'material-icons rotated': 'material-icons'}>add</span></li>
        <div className={props.expand ? 'mobile-nav__item--list expand' : 'mobile-nav__item--list'}>
            {props.children}
        </div>
        </div>
    )
}

export default CollapseNav