import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

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
                 }
               }
             }
           }
           }
    `}
    render={data => (
        <div className="recentLessons--container">
        <h1>Recent Lessons</h1>
        {data.allMarkdownRemark.edges.map(post =>(
            <div key={ post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>By {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            </div>
        ))}
    </div>
    )}
    />
);
    



export default Lessons;