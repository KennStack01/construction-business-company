import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGraphCmsCompanyContactInformation(limit: 1) {
        edges {
          node {
            phoneNumber1
            phoneNumber2
            email1
            notreAdresse
          }
        }
      }
    }
  `)

  const contactData = data.allGraphCmsCompanyContactInformation.edges[0].node

  return (
    <div className="md:w-1/3 my-10 md:my-24 bg-sadi-blue-600 text-white p-2 md:p-5 rounded-sm">
      <h1 className=" text-3xl font-semibold text-center">
        {" "}
        Nos Informations{" "}
      </h1>
      <div className="text-md md:text-sm">
        <div className="flex flex-col my-6">
          <h3 className="font-semibold my-1"> Notre Adresse </h3>
          <p className="text-md font-normal"> {contactData.notreAdresse} </p>
        </div>
        <div className="flex flex-col my-6">
          <h3 className="font-semibold my-1"> Nos Contacts </h3>
          <p className="text-md font-normal">
            <span className="font-semibold"> Téléphone 1 : </span>{" "}
            {contactData.phoneNumber1} <br />
            <span className="font-semibold"> Téléphone 2 : </span>{" "}
            {contactData.phoneNumber2} <br />
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-md text-center font-semibold my-2">
            {" "}
            Avez-vous des Questions, Ecrivez-nous:{" "}
          </h2>
          <a
            href={`mailto:${contactData.email1}`}
            className="bg-sadi-blue-400 hover:underline p-2 rounded-sm font-semibold mx-auto"
          >
            Entrez en Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
