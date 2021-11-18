/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { BiMailSend } from "react-icons/bi"

const Form = () => {
  return (
    <div className="md:w-2/3">
      <h1 className="text-2xl font-semibold text-center">Contactez-nous 👇</h1>
      <div className="bg-white shadow rounded p-8 mx-1 md:m-4 md:w-1/2 md:mx-auto">
        <form
          className="mb-4 md:justify-between"
          method="post"
          action={`https://getform.io/f/1179f6c4-451a-4658-aef8-51f1689df515`}
        >
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col mb-4 text-sm">
              <label
                className="mb-2 tracking-wide font-bold text-sm text-gray-800"
                htmlFor="name"
              >
                Nom Complet
              </label>
              <input
                className="py-2 px-3 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                type="text"
                name="name"
                id="name"
                placeholder="Tshilumba Jean-Baptiste"
                required
              />
            </div>
            <div className="flex flex-col mb-4 text-sm">
              <label
                className="mb-2 tracking-wide font-bold text-sm text-gray-800"
                htmlFor="email"
              >
                Adresse E-mail
              </label>
              <input
                className="py-2 px-3 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                type="email"
                name="email"
                id="email"
                placeholder="partenaire@gmail.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col mb-4 text-sm">
              <label
                className="mb-2 tracking-wide font-bold text-sm text-gray-800"
                htmlFor="phone"
              >
                Numero de Téléphone
              </label>
              <input
                className="py-2 px-3 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                type="number"
                name="phone"
                id="phone"
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>
            <div className="flex flex-col mb-4 text-sm">
              <label
                className="mb-2 tracking-wide font-bold text-sm text-gray-800"
                htmlFor="company"
              >
                Nom de l'Entreprise
              </label>
              <input
                className="py-2 px-3 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                type="text"
                name="company"
                id="company"
                placeholder="Holding Company USA"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mt-4 md:w-full text-sm">
            <label
              className="mb-2 font-bold text-sm text-gray-800"
              htmlFor="message"
            >
              Votre Message
            </label>
            <textarea
              name="message"
              id="message"
              className="resize-none p-1 h-36 rounded focus:outline-none border focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
              placeholder="Décrivez votre requête"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mt-10 md:mx-auto">
            <button
              type="submit"
              className="flex flex-row mx-auto justify-evenly text-white bg-sadi-blue-500 hover:bg-sadi-blue-600 font-bold py-3 md:py-2 px-6 text-xl rounded-md"
            >
              <h2 className="my-auto">Envoyez {` `}</h2>
              <BiMailSend className="text-3xl my-auto" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
