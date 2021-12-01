import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Services/HeroSection"
import TextMarketing from "../components/Services/TextMarketing"
import ServicesList from "../components/Services/ServicesList"
import Form from "../components/Contact/Form"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <HeroSection />
    <TextMarketing />
    <ServicesList />

    <div className="flex flex-col mx-auto justify-center bg-sadi-blue-500 w-full p-5 mt-10">
      <h1 className="text-2xl font-semibold text-center text-white">
        N'hésitez jamais de nous contacter
      </h1>
      <div className="mx-auto w-full md:w-2/3">
        <Form />
      </div>
    </div>
  </Layout>
)

export default Services
