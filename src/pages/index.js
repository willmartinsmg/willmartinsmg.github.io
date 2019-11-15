import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      My name is William Martins, lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed porttitor, nisl ut imperdiet porta, felis ex
      elementum metus, vitae lacinia metus dolor ac mi. Pellentesque scelerisque
      semper risus. Ut tincidunt feugiat sem, non malesuada arcu. Suspendisse
      molestie ante et tortor porta fringilla. Duis dignissim volutpat lectus
      vitae viverra. Ut pretium ex pellentesque pretium facilisis. Duis
      ultricies hendrerit ex ut lobortis. Quisque libero eros, venenatis quis
      diam non, tincidunt porta tortor.
    </p>
    <p>
      Quisque varius efficitur mi nec elementum. Nullam est sapien, venenatis
      sed nisi ut, efficitur dictum sapien. Nam eros nunc, commodo quis est non,
      dignissim convallis sapien. Vestibulum eu quam turpis. Phasellus eu sapien
      dolor. Quisque ultricies ligula rhoncus orci malesuada sodales. Integer
      gravida feugiat velit nec varius. Nunc aliquet feugiat purus, et fringilla
      turpis varius vitae. Praesent varius sit amet diam eu scelerisque. Aenean
      auctor nisi id tincidunt vestibulum. Proin tristique molestie scelerisque.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
