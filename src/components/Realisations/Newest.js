import React from "react"
import { Link } from "gatsby"

const Newest = ({ imageSrc, title, slug, description }) => {
  return (
    <Link
      to={`/realisations/${slug}`}
      className="flex flex-col md:flex-row justify-between mx-auto my-8 md:my-12"
    >
      <img
        src={imageSrc}
        alt={title}
        className="bg-cover rounded-lg md:w-1/2"
      />
      <div className="flex flex-col justify-start my-auto md:w-1/2 md:mx-4">
        <Link to={`/realisations/${slug}`}>
          <div>
            <h1 className="text-xl md:text-3xl font-bold hover:text-sadi-red-500">
              {" "}
              {title}{" "}
            </h1>
          </div>
        </Link>
        <div className="flex flex-col">
          <Link to={`/realisations/${slug}`}>
            <p className="text-sm"> {description.substring(0, 900)}... </p>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default Newest
