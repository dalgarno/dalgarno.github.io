import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello.</h1>
    <p>
      <Link to="/blog/my-first-post/">Test post</Link>
    </p>
  </Layout>
)

export default IndexPage
