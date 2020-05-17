import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
    </p>
  </Layout>
)

export default IndexPage
