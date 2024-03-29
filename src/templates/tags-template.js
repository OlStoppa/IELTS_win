import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import LessonLink from '../components/lessonLink'

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const bigTag = tag.toUpperCase();
   

    return (
        <Layout>
        <div>
            <h2>{bigTag}</h2>
            <ul>
                {edges.map(({node}) => {
                    const {slug} = node.fields
                    const { title, path } = node.frontmatter
                    return (
                        
                            <Link key={slug} to={path}><LessonLink data={node}/></Link>
                       
                    )
                })}
            </ul>
        </div>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        path
                        author
                        date
                        image {
                            childImageSharp {
                                resize(width: 1500, height: 1500) {
                                  src
                                }
                                fluid(maxWidth: 800) {
                                  ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        
                    }
                }
            }
        }
    }
`