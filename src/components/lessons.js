import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'

const Lessons = () => (
  <StaticQuery
    query={graphql`
        query  LessonIndexQuery{
            allMarkdownRemark{
             edges{
               node{
                   id
                 frontmatter{
                   path
                   title
                   author
                   date
                   image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                          src
                        }
                        fluid(maxWidth: 100) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                 }
               }
             }
           }
           }
    `}
    render={data => (
      <div className="recentLessons--container">
        <div className="recentLessons--header">
          <div className="recentLessons--header__name">
            <div>Recent Lessons</div>
          </div>
          <div className="recentLessons--header__line" />
        </div>

        {data.allMarkdownRemark.edges.map(post => (
          <Link
            to={post.node.frontmatter.path}
            style={{ textDecoration: "none"}}
          >
            <div key={post.node.id} className="recent-lesson--container">
              <div className="recent-lesson--container__pic">
                <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} />
              </div>
              <div className="recent-lesson--container__text">
                <h5>{post.node.frontmatter.title}</h5>
                <small>
                  By {post.node.frontmatter.author} on{" "}
                  {post.node.frontmatter.date}
                </small>
              </div>
            </div>
            <hr />
          </Link>
        ))}
      </div>
    )}
  />
)

export default Lessons
