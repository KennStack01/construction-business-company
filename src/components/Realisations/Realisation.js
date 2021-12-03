import React from "react"
import { Link } from "gatsby"

const Realisation = ({ imageSrc, title, description, slug }) => {
  return (
    <Link to={`/realisations/${slug}`} className="mx-1 md:mx-2 my-6 relative ">
      <img
        src={imageSrc}
        loading="lazy"
        placeholder="blurred"
        className="mx-auto rounded md:w-4/5 relative inset-0 bg-cover bg-center z-0 filter brightness-50 "
      />
      <div className="absolute flex flex-col text-center mx-auto mt-14 inset-0 justify-center items-center text-white font-semibold z-10  transform transition duration-500 hover:scale-110">
        <h1 className=" text-xl md:text-3xl">{title}</h1>
        <p className="text-md my-2 "> {description} </p>
      </div>
    </Link>
  )
}

export default Realisation
