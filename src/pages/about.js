import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"

const AboutPage = () => (
  <main>
    <Layout>
      <Link to="/">Homepage</Link>
      <h1>About the Author</h1>
      <h1 className="text-4xl font-bold text-center">Hello World!</h1>
      <p>Welcome to my Gatsby site.</p>
    </Layout>
  </main>
)

export default AboutPage
