import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    datoCmsServicesMarketingText {
      title
      description
    }
  }
`

const TextMarketing = () => {
  const data = useStaticQuery(query)

  const { title, description } = data.datoCmsServicesMarketingText

  return (
    <div className="flex flex-col justify-center text-center mx-3 md:mx-auto">
      <h1 className="text-sadi-blue-500 text-xl md:text-4xl font-bold mt-12">
        {" "}
        {title}{" "}
      </h1>
      <p className="text-gray-800 text-md my-8 text-justify mx-auto md:w-2/3">
        {" "}
        {description}{" "}
      </p>
    </div>
  )
}

export default TextMarketing
