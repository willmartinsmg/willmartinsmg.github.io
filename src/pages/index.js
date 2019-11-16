import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center">
        <h1 className=" text-indigo-400 text-5xl uppercase  ">Hi people</h1>
        <div className="font-serif text-lg text-gray-400 text-center">
          <p className="  leading-relaxed ">
            My name is William Martins, lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed porttitor, nisl ut imperdiet porta, felis ex
            elementum metus, vitae lacinia metus dolor ac mi. Pellentesque
            scelerisque semper risus. Ut tincidunt feugiat sem, non malesuada
            arcu. Suspendisse molestie ante et tortor porta fringilla. Duis
            dignissim volutpat lectus vitae viverra. Ut pretium ex pellentesque
            pretium facilisis. Duis ultricies hendrerit ex ut lobortis. Quisque
            libero eros, venenatis quis diam non, tincidunt porta tortor.
          </p>

          <div className=" mt-4 ">
            <Link
              className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base"
              to="/about/"
            >
              Carreira
            </Link>
          </div>
        </div>
      </div>

      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
