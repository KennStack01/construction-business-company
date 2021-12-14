import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroSection from "./HeroSection"
import Layout from "../layout"
import SEO from "../seo"
import ContentHeroSection from "./ContentHeroSection"

const PageContent = ({ data }) => {
  const project = data.datoCmsCompanyService

  console.log(data)

  return (
    <Layout>
      <SEO title={project.titreDuService} />
      <ContentHeroSection
        title={project.titreDuService}
        description={project.shortDescriptionNode.childMarkdownRemark.html}
      />
      <div
        className="my-10 mx-4 md:mx-10 markdown"
        dangerouslySetInnerHTML={{
          __html: project.fullDescriptionNode.childMarkdownRemark.html,
        }}
      >
        {/* {project.fullDescriptionNode.childMarkdownRemark.html} */}
      </div>
    </Layout>
  )
}

export default PageContent

export const query = graphql`
  query ($slug: String!) {
    datoCmsCompanyService(slug: { eq: $slug }) {
      titreDuService
      shortDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
      fullDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
