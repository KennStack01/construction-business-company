import React from "react"
import { Link } from "gatsby"

const Newest = ({ imageSrc, title, slug }) => {
  return (
    <Link
      to={`/realisations/${slug}`}
      className="mx-1 md:mx-2 my-6 relative  transform transition duration-500 hover:scale-110"
    >
      <img
        src={imageSrc}
        loading="lazy"
        placeholder="blurred"
        className="mx-auto rounded md:w-5/6 relative inset-0 bg-cover bg-center z-0 filter brightness-50"
      />
      <h1 className="absolute text-center mx-auto mt-14 inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-semibold z-10">
        {" "}
        {title}{" "}
      </h1>
    </Link>
  )
}

export default Newest
