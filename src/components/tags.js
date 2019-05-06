import React from 'react'
import { Link } from 'gatsby'

const Tags = (props) => (
    <div>
    <hr/>
    <div className="tag--container">
        
         {props.tags.map((tag) => <Link to={`/tags/${tag}/`}><div className="tag">{tag}</div></Link>)}
        
        
    </div>
    <hr/>
    </div>
);

export default Tags