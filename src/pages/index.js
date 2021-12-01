import React from "react"
import { Link } from "gatsby"
import { RiPhoneFill } from "react-icons/ri"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Home/HeroSection"
import Mission from "../components/Home/Mission"
import ServicesList from "../components/Services/ServicesList"
import ClientsList from "../components/Home/ClientsList"
import NotreExperience from "../components/Home/NotreExperience"
import Form from "../components/Contact/Form"
import ContactInfo from "../components/Contact/ContactInfo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <HeroSection />

      <Link
        to="/contact"
        className="flex flex-row my-8 w-2/3 md:w-1/4 mx-auto justify-center text-center bg-sadi-blue-500 hover:bg-sadi-blue-400 text-sm md:text-xl text-white font-semibold p-2 rounded-md"
      >
        <RiPhoneFill className="my-auto text-2xl md:text-3xl mx-1" />
        <h5 className="my-auto mx-1">Contactez-nous</h5>
      </Link>
      <Mission />
      <ServicesList />
      <Link
        to="/services"
        className="flex flex-row my-8 w-48 mx-auto justify-center text-center bg-sadi-blue-500 hover:bg-sadi-blue-400 text-sm md:text-xl text-white font-semibold p-2 rounded-md"
      >
        <h5 className="my-auto mx-1">Voir plus</h5>
      </Link>
      <ClientsList />
      <NotreExperience />
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-semibold text-center">
            Contactez-nous 👇
          </h1>
          <Form />
        </div>
        <ContactInfo />
      </div>
    </Layout>
  )
}

export default IndexPage
