import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import LessonCard from './lessonCard'
import {SimilarArticlesFactory} from './similarArticlesFactory'

const RelatedArticlesComponent = ({ lessons }) => {
    
return(
    <div className='container--related-articles'>
        {lessons.map((lesson, i) => (
            <LessonCard {...lesson.article.node.frontmatter} key={i} />
        ))}
    </div>
)}

export default (props) => (
    <StaticQuery
        query={graphql`
            query RelatedArticles {
                lessons: allMarkdownRemark (
                    sort: {order: DESC, fields: [frontmatter___date]}

                ){
                    edges {
                        node{
                            fields {
                                slug
                            }
                        
                        frontmatter {
                            path
                            title
                            date
                            author
                            image {
                                childImageSharp {
                                    resize(width: 1500, height: 1500) {
                                      src
                                    }
                                    fluid(maxWidth: 785) {
                                      ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            tags
                        }
                    }
                    }
                }
                
            }
    `}
    render={data => {
        const {tags, currentArticlePath } = props;
        const lessons = data.lessons.edges;
        
        
        const similarArticles = new SimilarArticlesFactory(
            lessons, currentArticlePath
        )
        .setMaxArticles(2)
        .setTags(tags)
        .getArticles()

        return (
            <RelatedArticlesComponent 
            lessons={similarArticles}
            />
        )
    }}
    />
)