import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <p>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
    </p>
    <p>
      <Link to="/test/my-second-post/">Go to my first Markdown blog post</Link>
    </p>
  </Layout>
)

export default IndexPage
