import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Tags from '../components/tags';
import ShareBlock from '../components/share-block'


export default function Lesson({data}) {
    const lessonData = data.markdownRemark;

    
    return (
        <Layout>
        <div>
            
            <div className="lesson-link">
            <Img fluid={lessonData.frontmatter.image.childImageSharp.fluid} />
            <div className="lesson-link__footer">
            <h2>{lessonData.frontmatter.title}</h2>
            <span>By {lessonData.frontmatter.author}</span>
            <span> on {lessonData.frontmatter.date}</span>
            </div>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: lessonData.html}}/>
            {lessonData.frontmatter.answers && lessonData.frontmatter.answers.map(answer => <h1>{answer}</h1>)}
            <Tags 
                tags={lessonData.frontmatter.tags}
            />
            <ShareBlock 
                url={`www.ieltswin.com/${lessonData.frontmatter.path}`}
                />
        </div>
        </Layout>
    );
}

export const lessonQuery = graphql`
query LessonByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}){
        html
        frontmatter {
            path
            author
            title
            date
            tags
            answers
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
        }
    }
}
`