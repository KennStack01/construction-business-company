import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ClientsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsClientPartenaire {
        edges {
          node {
            clientLogo {
              url
            }
            clientCompanyName
            id
          }
        }
      }
    }
  `)

  const clients = data.allGraphCmsClientPartenaire.edges.map(({ node }) => node)

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl md:text-4xl text-gray-700 my-4 md:mt-20">
        Ils nous font confiance
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-content-center mx-auto">
        {clients.map(client => (
          <div key={client.id} className="flex flex-col justify-center my-2">
            <img
              src={client.clientLogo.url}
              alt={client.clientCompanyName}
              className="w-auto h-16 mx-auto md:w-auto filter grayscale"
            />
            <h5 className="text-gray-700 text-sm font-semibold mx-auto">
              {" "}
              {client.clientCompanyName}{" "}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsList
