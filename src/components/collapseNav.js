import React, {useState} from 'react'

const CollapseNav = (props) => {
    const [expand, setExpand] = useState(false)

    return (
        <div className='mobile-nav__item--container'>
        <li className='mobile-nav__item' onClick={() => setExpand(!expand)}>{props.item}</li>
        <div className={expand ? 'mobile-nav__item--list expand' : 'mobile-nav__item--list'}>
            {props.children}
        </div>
        </div>
    )
}

export default CollapseNav