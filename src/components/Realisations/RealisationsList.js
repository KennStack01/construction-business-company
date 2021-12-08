import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Realisation from "./Realisation"
import Newest from "./Newest"

const query = graphql`
  query {
    allDatoCmsRealisation(sort: { fields: meta___createdAt, order: ASC }) {
      edges {
        node {
          title
          descriptionDuProjet
          galleryOfImages {
            url
          }
          id
          slug
        }
      }
    }
  }
`

const RealisationsList = () => {
  const data = useStaticQuery(query)

  const allProjects = data.allDatoCmsRealisation.edges.map(({ node }) => node)

  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl md:text-4xl text-center my-10 md:my-16 text-sadi-blue-500 font-bold justify-self-start">
          Réalisation la plus récente
        </h1>
      </div>

      <div className="mx-2 md:mx-auto md:w-2/3">
        <Newest
          key={allProjects[0].id}
          title={allProjects[0].title}
          description={allProjects[0].descriptionDuProjet}
          imageSrc={allProjects[0].galleryOfImages[0].url}
          slug={allProjects[0].slug}
        />
      </div>
      <div className="my-8">
        <h1 className="text-2xl md:text-4xl text-center my-10 md:my-16 text-sadi-blue-500 font-bold justify-self-start">
          Parcourez nos Réalisations
        </h1>
      </div>

      {/* <div className="flex flex-col justify-center sm:grid sm:grid-cols-2 "> */}
      <div className="flex flex-col justify-center md:grid grid-cols-2  ">
        {allProjects.map(project => (
          <Realisation
            key={project.id}
            title={project.title}
            description={project.descriptionDuProjet}
            imageSrc={project.galleryOfImages[0].url}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default RealisationsList
