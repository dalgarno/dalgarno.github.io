import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Header siteTitle="test" />
      <div className="blog-post">
        {/* <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2> */}
        <div class="container">
          <div
            dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }}
            className="toc"
          />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

// https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=#configuring-the-tableofcontents
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(absolute: false)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
