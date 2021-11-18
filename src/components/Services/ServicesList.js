import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Service from "./Service"

const ServicesList = () => {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsCompanyService {
        edges {
          node {
            titreDuService
            shortDescription
            slug
            id
          }
        }
      }
    }
  `)

  const allServices = data.allGraphCmsCompanyService.edges.map(
    ({ node }) => node
  )

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl md:text-4xl text-gray-700 my-14 md:mt-20">
        Découvrir Nos Services
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {allServices.map(service => (
          <Service
            key={service.id}
            title={service.titreDuService}
            description={service.shortDescription}
            slug={service.slug}
          />
        ))}
      </div>

      <Link
        to="/services"
        className="flex flex-row my-8 w-48 mx-auto justify-center text-center bg-sadi-blue-500 hover:bg-sadi-blue-400 text-sm md:text-xl text-white font-semibold p-2 rounded-md"
      >
        <h5 className="my-auto mx-1">Voir plus</h5>
      </Link>
    </div>
  )
}

export default ServicesList
