import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import cn from "classnames"
import { CgClose } from "react-icons/cg"
import { RiMenu3Fill } from "react-icons/ri"
import { StaticImage } from "gatsby-plugin-image"

const activeLinkStyles = {
  // backgroundColor: "#E2DF00",
  backgroundColor: "#FCD34D",
  textColor: "white",
  cursor: "pointer",
}

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full text-back-color-600 bg-white shadow-sm p-0">
      <div className="flex flex-row justify-between mx-2 md:mx-4">
        <div className="flex items-center my-auto">
          <Link to="/">
            {/* <div style={{ maxWidth: `120px`, marginBottom: `1.45rem` }}> */}
            <div className=" w-28">
              <StaticImage src="../images/sadi-logo.png" alt="SADI SARL Logo" />
            </div>
          </Link>
        </div>

        <button
          className="items-center block px-3 py-2 my-auto  border rounded lg:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          {mobileMenuIsOpen ? <CgClose /> : <RiMenu3Fill />}
        </button>

        <div className="my-auto hidden lg:flex flex-row justify-between">
          <div
            className={cn(
              // "sm:grid grid-cols-2 my-auto md:mt-2 z-10 hidden lg:flex lg:flex-row lg:items-center md:justify-center text-sm w-full md:w-auto",
              "flex flex-row items-center justify-center text-md text-sadi-blue-600"
              // mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            <Link
              to="/"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Accueil</h5>
            </Link>

            <Link
              to="/services"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Services</h5>
            </Link>

            <Link
              to="/realisations"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Réalisations</h5>
            </Link>

            <Link
              to="/actu"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Actualités</h5>
            </Link>

            <Link
              to="/contact"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Contact</h5>
            </Link>
          </div>
        </div>

        <div
          className={
            mobileMenuIsOpen
              ? "absolute z-20 mt-12 md:mt-16 flex flex-col lg:hidden bg-white mx-auto w-full py-3 px-2 text-sm"
              : "hidden"
          }
        >
          <div
            className={
              mobileMenuIsOpen
                ? `grid grid-cols-2 place-content-center`
                : `hidden`
            }
          >
            <Link
              to="/"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Accueil</h5>
            </Link>
            <Link
              to="/services"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Services</h5>
            </Link>
            <Link
              to="/realisations"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Réalisations</h5>
            </Link>
            <Link
              to="/actu"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Actualités</h5>
            </Link>
            <Link
              to="/contact"
              activeStyle={activeLinkStyles}
              activeClassName="active"
              className="font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
            >
              <h5 className="block">Contact</h5>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
