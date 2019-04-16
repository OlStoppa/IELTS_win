import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Lesson({data}) {
    const lessonData = data.markdownRemark;

    return (
        <Layout>
        <div>
            <h1>{lessonData.frontmatter.title}</h1>
            <h4>By {lessonData.frontmatter.author} on {lessonData.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: lessonData.html}}/>
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
        }
    }
}
`