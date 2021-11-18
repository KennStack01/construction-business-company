import React from "react"
import { Link } from "gatsby"
import { BiRightArrowAlt } from "react-icons/bi"

const Service = ({ title, description, slug }) => {
  return (
    <div className="flex flex-col items-center text-gray-800 border border-l-4 border-sadi-blue-300 bg-white p-2 px-4 rounded shadow-sm hover:shadow-lg mx-3 md:mx-5 mb-8">
      <h1 className="font-semibold text-2xl text-sadi-blue-500"> {title} </h1>
      <p className="font-normal my-8 text-justify text-sm md:text-sm">
        {" "}
        {description}{" "}
      </p>
      <Link to={`/services/${slug}`} className="flex flex-row">
        <h5 className="my-auto font-medium hover:underline"> Découvrir </h5>
        <BiRightArrowAlt className="my-auto text-xl" />
      </Link>
    </div>
  )
}

export default Service
