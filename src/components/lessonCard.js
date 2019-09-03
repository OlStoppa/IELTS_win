import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const LessonCard = (props) => (
    <div className="container--lessonCard">
        <Link to={props.path} style={{textDecoration: 'none'}}>
        <div className="image--lessonCard">
            <Img fluid={props.image.childImageSharp.fluid} />
        </div>
        <div className="info--lessonCard">
            <h4>{props.title}</h4>
            <span>by {props.author}</span>
        </div>
        </Link>
    </div>
)

export default LessonCard

