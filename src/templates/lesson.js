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
            <h2>{lessonData.frontmatter.title}</h2>
            <Img fluid={lessonData.frontmatter.image.childImageSharp.fluid} />
            <h4>By {lessonData.frontmatter.author} on {lessonData.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: lessonData.html}}/>
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