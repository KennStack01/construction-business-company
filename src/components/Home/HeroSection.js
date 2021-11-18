import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import ReactTypingEffect from "react-typing-effect"
import { RiPhoneFill } from "react-icons/ri"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsHomeBanner {
        greatWelcomeText
        welcomeTextDescription
        imageBackground {
          fileName
          url
        }
      }
    }
  `)

  const image = data.graphCmsHomeBanner.imageBackground.url
  const greatWelcomeText = data.graphCmsHomeBanner.greatWelcomeText
  const welcomeTextDescription = data.graphCmsHomeBanner.welcomeTextDescription

  // console.log(data.graphCmsHomeBanner)

  return (
    <div className="mt-0 w-full text-white">
      <div className="flex flex-col absolute">
        <h1 className="text-3xl md:text-4xl lg:text-7xl  font-bold z-40 mt-14 md:mt-16 ml-3 md:ml-10 md:w-1/3">
          <ReactTypingEffect
            text={[greatWelcomeText, "Ensemble, nous changeons le monde"]}
            speed={50}
            typingDelay={100}
            eraseSpeed={20}
            cursorClassName="String"
          />
        </h1>
        <br />
        <p className="text-md md:text-xl font-medium z-40 mt-10 mb-8 md:w-2/3 mx-auto hidden md:block">
          {welcomeTextDescription}
        </p>

        {/* <Link
          to="/contact"
          className="hidden md:flex flex-row justify-center bg-sadi-blue-500 hover:bg-sadi-blue-400 text-xl text-white font-semibold p-2 rounded-md z-40 justify-self-start mx-auto"
        >
          <RiPhoneFill className="my-auto text-3xl mx-1" />
          <h5 className="my-auto mx-1">Contactez-nous</h5>
        </Link> */}
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
