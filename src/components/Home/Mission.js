import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Mission = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsMissionDescription {
        title
        textDescription
        sideImage {
          url
        }
      }
    }
  `)

  return (
    <div className="mission flex flex-col md:flex-row bg-white p-0 rounded-md shadow-sm pt-4 sm:pt-0 my-8 md:my-16 mx-4 mr-4 md:mx-20">
      <div className="flex flex-col justify-between my-auto mx-4 md:w-1/2">
        <h1 className="text-xl md:text-3xl md:text-center text-sadi-blue-500 font-bold justify-self-start">
          {data.graphCmsMissionDescription.title}
        </h1>
        <p className="text-sm md:text-lg text-justify text-gray-700 font-medium my-6">
          {data.graphCmsMissionDescription.textDescription}
        </p>
      </div>
      {/* <StaticImage
        alt={data.graphCmsMissionDescription.title}
        src={data.graphCmsMissionDescription.sideImage.url}
        className="my-auto md:w-1/2 rounded-t-md object-cover md:rounded-r-md"
      /> */}
      <img
        src={data.graphCmsMissionDescription.sideImage.url}
        alt={data.graphCmsMissionDescription.title}
        className="my-auto md:w-1/2 rounded-md object-cover md:rounded-r-md"
      />
    </div>
  )
}

export default Mission
