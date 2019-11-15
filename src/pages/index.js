import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>
        My name is William Martins, lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed porttitor, nisl ut imperdiet porta, felis ex
        elementum metus, vitae lacinia metus dolor ac mi. Pellentesque
        scelerisque semper risus. Ut tincidunt feugiat sem, non malesuada arcu.
        Suspendisse molestie ante et tortor porta fringilla. Duis dignissim
        volutpat lectus vitae viverra. Ut pretium ex pellentesque pretium
        facilisis. Duis ultricies hendrerit ex ut lobortis. Quisque libero eros,
        venenatis quis diam non, tincidunt porta tortor.
      </p>
      <p>
        Quisque varius efficitur mi nec elementum. Nullam est sapien, venenatis
        sed nisi ut, efficitur dictum sapien. Nam eros nunc, commodo quis est
        non, dignissim convallis sapien. Vestibulum eu quam turpis. Phasellus eu
        sapien dolor. Quisque ultricies ligula rhoncus orci malesuada sodales.
        Integer gravida feugiat velit nec varius. Nunc aliquet feugiat purus, et
        fringilla turpis varius vitae. Praesent varius sit amet diam eu
        scelerisque. Aenean auctor nisi id tincidunt vestibulum. Proin tristique
        molestie scelerisque.
      </p>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about/">About</Link>

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
