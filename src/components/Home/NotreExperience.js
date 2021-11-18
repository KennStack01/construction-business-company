import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const NotreExperience = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsNotreExperience {
        imageTeam {
          url
        }
        greatTitle
        descriptionDeLExperience
        motDuPresident
        nomDuPresident
      }
    }
  `)

  const content = data.graphCmsNotreExperience

  return (
    <div className="w-full bg-sadi-blue-600 my-10 text-white">
      <div className="flex flex-col md:flex-row rounded-sm">
        <img
          src={content.imageTeam.url}
          alt="Team Picture"
          className="w-auto md:w-1/2"
        />
        <div className="flex flex-col justify-between md:w-1/2 py-3">
          <h1 className="text-center font-semibold text-2xl md:text-4xl my-3 md:my-6">
            {content.greatTitle}
          </h1>
          <p className="text-justify text-sm mx-5">
            {content.descriptionDeLExperience}
          </p>
          <div className="flex flex-col justify-center mt-6 mx-5 md:mx-20 tex-center">
            <p className="text-xs italic">"{content.motDuPresident}"</p>
            <div className="flex flex-col my-2 text-right text-xs ">
              <h5 className="font-semibold">{content.nomDuPresident},</h5>
              <p className=" font-light">
                Président du Conseil d'Administration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotreExperience
