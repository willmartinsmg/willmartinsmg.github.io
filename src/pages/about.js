import React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <main>
    <div>
      <Link to="/">Homepage</Link>
      <h1>About the Author</h1>
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <p>Welcome to my Gatsby site.</p>
    </div>
  </main>
)

export default AboutPage
