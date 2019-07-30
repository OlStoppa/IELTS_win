import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Tags from '../components/tags';
import ShareBlock from '../components/share-block'


export default function Lesson({data}) {
    const lessonData = data.markdownRemark;

    const {title, image, author, date, tags, path} = lessonData.frontmatter
    return (
        <Layout>
        <SEO title={title} image={image.childImageSharp.fluid.src} keywords={tags}/>
        <ShareBlock 
                url={`https://www.ieltsxl.com${path}`}
                />
        <div>
            
            <div className="lesson-link">
            <Img fluid={image.childImageSharp.fluid} />
            <div className="lesson-link__footer">
            <h2>{title}</h2>
            <span>By {author}</span>
            <span> on {date}</span>
            </div>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: lessonData.html}}/>
            {lessonData.frontmatter.answers && lessonData.frontmatter.answers.map(answer => <h1>{answer}</h1>)}
            <Tags 
                tags={tags}
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