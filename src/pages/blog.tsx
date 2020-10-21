import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from 'gatsby-image'
import Layout from '../components/Layout/Layout'
import BlogCard from '../components/BlogCard/BlogCard';

const blog = () => {
    const data = useStaticQuery(
        graphql `
        query {
          allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
            edges {
              node {
                title
                slug
                excerpt {
                  childMarkdownRemark {
                    excerpt(pruneLength: 150)
                  }
                }
                publishDate(formatString: "DD MMMM , YYYY")
              }
            }
          }
        }
        `)

    return (
        <div>
             <Layout>
                <div>
                  {data.allContentfulBlogPost.edges.map((edge) => {
                    const { title, excerpt, publishDate, slug } = edge.node
                    // const { excerpt } = excerpt.childMarkdownRemark

                    return(
                      <div>
                        <BlogCard title={title} slug={slug} excerpt={excerpt.childMarkdownRemark.excerpt} publishDate={publishDate} />
                      </div>
                    )
                  })}
                </div>
             </Layout>
        </div>
    )
}

export default blog
