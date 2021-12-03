import React from "react"
import ReactTypingEffect from "react-typing-effect"

const HeroSection = ({ title, description, imageSrc }) => {
  return (
    <div className="mt-0 w-full text-white">
      <div className="flex flex-col mx-auto absolute">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold z-40 mt-14 mx-auto text-left md:ml-20">
          <ReactTypingEffect
            text={[title]}
            speed={50}
            typingDelay={100}
            eraseSpeed={20}
            cursorClassName="String"
          />
        </h1>
        <br />
        <p className="text-xl md:text-5xl font-medium text-left z-40 mt-6 md:mt-12 md:w-3/4 mx-auto ">
          {description}
        </p>
      </div>

      <img
        src={imageSrc}
        loading="lazy"
        placeholder="blurred"
        className="w-full relative inset-0 bg-cover object-cover bg-center z-0 filter brightness-50"
        alt="Photo by Jeriden Villegas on Unsplash"
      />
    </div>
  )
}

export default HeroSection
