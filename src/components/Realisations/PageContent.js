import React from "react"
import { graphql } from "gatsby"
import HeroSection from "./HeroSection"
import Layout from "../layout"
import SEO from "../seo"

const PageContent = ({ data }) => {
  const project = data.datoCmsRealisation

  return (
    <Layout>
      <SEO title={project.title} />
      <HeroSection
        title={project.title}
        description={project.descriptionDuProjet}
        imageSrc={project.galleryOfImages[0].url}
      />
      <div className="flex flex-col text-left mx-2 md:mx-5">
        <h2 className="font-bold text-3xl md:text-4xl text-sadi-blue-600 my-2 md:my-5">
          {" "}
          {project.title}{" "}
        </h2>
        <div className="flex flex-row text-gray-700">
          <h3 className="font-semibold text-xl">Nom du Client: </h3>
          <p className="font-medium mx-2 text-xl my-auto">
            {" "}
            {project.nomDuClient}{" "}
          </p>
        </div>
        <div className="flex flex-row text-gray-700">
          <h3 className="font-semibold text-xl">Description: </h3>
          <p className="font-medium mx-2 text-xl my-auto">
            {" "}
            {project.descriptionDuProjet}{" "}
          </p>
        </div>
        <div className="flex flex-row text-gray-700">
          <h3 className="font-semibold text-xl">Date: </h3>
          <p className="font-medium mx-2 text-xl my-auto">
            {" "}
            {project.yearOfRealisation}{" "}
          </p>
        </div>
        <div className="flex flex-row text-gray-700">
          <h3 className="font-semibold text-xl">Réalisation: </h3>
          <p className="font-medium mx-2 text-xl my-auto">
            {" "}
            {project.realisation}{" "}
          </p>
        </div>
        <div className="flex flex-row text-gray-700">
          <h3 className="font-semibold text-xl">Détails: </h3>
          <p className="font-medium mx-2 text-xl my-auto">
            {" "}
            {project.detailsSupplementaires}{" "}
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:mx-auto my-4 md:my-8">
          {project.galleryOfImages.map(image => (
            <img
              key={image.url}
              src={image.url}
              alt={image.url}
              className="bg-cover rounded-lg my-2 mx-2 md:w-96"
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PageContent

export const query = graphql`
  query ($slug: String!) {
    datoCmsRealisation(slug: { eq: $slug }) {
      title
      nomDuClient
      descriptionDuProjet
      yearOfRealisation
      realisation
      detailsSupplementaires
      galleryOfImages {
        url
      }
      slug
    }
  }
`
