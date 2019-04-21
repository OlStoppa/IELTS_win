import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import testpic from '../images/correction.png';

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
        <div className="recentLessons--header">
        <div className="recentLessons--header__name">
        <div>
        Recent Lessons
        </div>
        </div>
        <div className="recentLessons--header__line">

        </div>
        </div>
        
        {data.allMarkdownRemark.edges.map(post =>(
            <Link to={post.node.frontmatter.path}style={{textDecoration: "none"}}>
            <div key={ post.node.id} className="recent-lesson--container">
            <div className="recent-lesson--container__pic"><img src={testpic}/></div>
            <div className="recent-lesson--container__text">
            <h4>{post.node.frontmatter.title}</h4>
            <small>By {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            </div>
            </div>
            <hr/>
            </Link>
            
        ))}
    </div>
    )}
    />
);
    



export default Lessons;