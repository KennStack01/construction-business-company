// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import HeroSection from "./HeroSection"
// import Layout from "../layout"
// import SEO from "../seo"
// import ContentHeroSection from "./ContentHeroSection"

// const query = graphql`
//   query ($slug: String!) {
//     datoCmsCompanyService(slug: { eq: $slug }) {
//       titreDuService
//       shortDescriptionNode {
//         internal {
//           content
//         }
//       }
//       slug
//       id
//       fullDescriptionNode {
//         internal {
//           content
//         }
//       }
//     }
//   }
// `

// const ServicePageContent = () => {
//   const data = useStaticQuery(query)
//   const project = data.datoCmsRealisation

//   return (
//     <Layout>
//       <SEO title={project.titreDuService} />
//       <ContentHeroSection
//         title={project.title}
//         description={project.shortDescriptionNode.internal.content}
//       />
//       <div className="my-10 mx-4 md:mx-10">
//         {project.fullDescriptionNode.internal.content}
//       </div>
//     </Layout>
//   )
// }

// export default ServicePageContent
