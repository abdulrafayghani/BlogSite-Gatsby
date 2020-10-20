const { graphql } = require('gatsby')
const path = require('path')

exports.createaPages = async ({ grahql, actions }) => {
    const response = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    response.data.allContentfulBlogPost.edges.forEach(edge => {
        createaPage({
            path: `/blog/${edge.node.slug}`,
            component: path.resolve('./src/templates/blogPost.tsx')
        })
    }