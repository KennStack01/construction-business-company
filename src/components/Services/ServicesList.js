import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Service from "./Service"

const query = graphql`
  query {
    allDatoCmsCompanyService {
      edges {
        node {
          titreDuService
          shortDescriptionNode {
            internal {
              content
            }
          }
          slug
          id
        }
      }
    }
  }
`

const ServicesList = () => {
  const data = useStaticQuery(query)

  const allServices = data.allDatoCmsCompanyService.edges.map(
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
            description={service.shortDescriptionNode.internal.content}
            slug={service.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesList
