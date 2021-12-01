import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { RiPhoneFill } from "react-icons/ri"

const query = graphql`
  query {
    datoCmsServicesBanner {
      greatTitle
      textDescription
      imageBackground {
        url
      }
    }
  }
`

const HeroSection = () => {
  const data = useStaticQuery(query)

  const image = data.datoCmsServicesBanner.imageBackground.url
  const greatTitle = data.datoCmsServicesBanner.greatTitle
  const textDescription = data.datoCmsServicesBanner.textDescription

  // console.log(data.datoCmsServicesBanner)

  return (
    <div className="mt-0 w-full text-white">
      <div className="flex flex-col absolute">
        <h1 className="text-3xl md:text-4xl lg:text-7xl sm:text-center md:text-left font-bold z-40 mt-14 md:mt-16 ml-3 md:ml-10 md:w-2/3">
          {greatTitle}
        </h1>
        <br />
        <p className="text-md md:text-3xl font-medium z-40 md:mt-10 mb-4 md:mb-8 md:w-2/3 mx-4 md:mx-auto block">
          {textDescription}
        </p>

        <Link
          to="/contact"
          className="flex flex-row justify-center bg-sadi-blue-500 hover:bg-sadi-blue-400 text-xl text-white font-semibold p-2 rounded-md z-40 justify-self-start mx-auto"
        >
          <RiPhoneFill className="my-auto text-3xl mx-1" />
          <h5 className="my-auto mx-1">Entrez en Contact</h5>
        </Link>
      </div>

      <img
        src={image}
        loading="lazy"
        placeholder="blurred"
        className="w-full relative inset-0 bg-cover object-cover bg-center z-0 filter brightness-50"
        alt="Photo by Jeriden Villegas on Unsplash"
      />
    </div>
  )
}

export default HeroSection
