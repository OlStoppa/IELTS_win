import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const LessonLink = (props) => {

    const { title, author, date, image, description } = props.data.frontmatter

    return (
        <div>
        <div className="lesson-link">
            <Img className="link-image" fluid={image.childImageSharp.fluid} />
            <div className="lesson-link__footer">
                <h2>{title}</h2>
                <div>
                <span>{date}</span> |
                <span>by {author}</span>
                </div>
            </div>
        </div>

        </div>
    )
}
    



export default LessonLink