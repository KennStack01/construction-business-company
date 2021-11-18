import React, { useState } from "react"
import { Link } from "gatsby"
import { BsFacebook, BsInstagram, BsYoutube, BsSunFill } from "react-icons/bs"
import { FaMoon } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="divide-y divide-white text-white bg-sadi-blue-700 py-2 md:py-5 px-2 md:px-20 w-full">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 place-content-center mx-auto md:mx-0 md:flex flex-row justify-center text-sm">
          <div className="flex flex-col md:flex-row mx-2">
            <div className="flex flex-col my-2 mx-6">
              <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
                Companie
              </h1>
              <div className="flex flex-col">
                <Link to="/">
                  <h5 className="hover:underline hover:bg-back-color-500 p-1 rounded">
                    Acceuil
                  </h5>
                </Link>
                <Link to="/services">
                  <h5 className="hover:underline hover:bg-back-color-500 p-1 rounded">
                    Services
                  </h5>
                </Link>
                <Link to="/realisations">
                  <h5 className="hover:underline hover:bg-back-color-500 p-1 rounded">
                    Réalisations
                  </h5>
                </Link>
              </div>
            </div>
            <div className="flex flex-col my-2 mx-6">
              <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
                Informations
              </h1>
              <div className="flex flex-col">
                <Link to="/actu">
                  <h5 className="hover:underline hover:bg-back-color-500 p-1 rounded">
                    Actualités
                  </h5>
                </Link>
                <Link to="/contact">
                  <h5 className="hover:underline hover:bg-back-color-500 p-1 rounded">
                    Contact
                  </h5>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-2 mx-6">
            <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
              Légal
            </h1>
            <div className="flex flex-col">
              <Link to="/">
                <h5 className="hover:underline p-1 rounded">
                  Politique de confidentialité
                </h5>
              </Link>
              <Link to="/">
                <h5 className="hover:underline p-1 rounded">
                  Conditions d’utilisation
                </h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mx-auto my-5 text-xl">
          <h1 className="text-sm md:text-md font-semibold">
            Retrouvez-nous sur:{" "}
          </h1>
          <div className="flex flex-row mx-auto">
            <a
              href="https://www.linkedin.com/in/kennkibadi/"
              target="__blank"
              className="mx-1 my-auto"
            >
              <div className="text-2xl lg:text-3xl my-auto">
                <BsFacebook />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kennkibadi/"
              target="__blank"
              className="mx-1 my-auto"
            >
              <div className="text-2xl lg:text-3xl my-auto">
                <BsInstagram />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kennkibadi/"
              target="__blank"
              className="mx-1 my-auto"
            >
              <div className="text-2xl lg:text-3xl my-auto">
                <BsYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-2 md:mt-5 w-4/5 text-center text-xs md:text-md my-auto">
        © 2021 Sadi SARL - Built by{" "}
        <a
          href="https://www.webcontract.io"
          target="__blank"
          className="hover:text-yellow-400 font-semibold"
        >
          WebContract.io
        </a>{" "}
      </p>
    </div>
  )
}

export default Footer
