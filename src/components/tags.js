import React from 'react'
import { Link } from 'gatsby'

const Tags = (props) => (
    <div>
        <hr/>
       Tags:  {props.tags.map((tag) => <Link to={`/tags/${tag}/`}>{tag}</Link>)}
        
        <hr/>
    </div>
);

export default Tags