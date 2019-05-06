/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;

    const lessonTemplate = path.resolve('src/templates/lesson.js');
    const tagTemplate = path.resolve('src/templates/tags-template.js')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                  node{
                      id
                      fields {
                          slug
                      }
                    frontmatter{
                      path
                      title
                      author
                      date
                      tags
                    }
                  }
                }
              }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }
        const lessons = res.data.allMarkdownRemark.edges
        lessons.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: lessonTemplate
            })
        })

        let tags = []

        _.each(lessons, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        tags = _.uniq(tags)

        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            })
        })
    })


}
