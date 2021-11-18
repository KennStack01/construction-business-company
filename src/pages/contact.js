import React from "react"
import ContactInfo from "../components/Contact/ContactInfo"
import Form from "../components/Contact/Form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <h1 className="text-2xl md:text-4xl md:text-center my-10 md:my-16 text-sadi-blue-500 font-bold justify-self-start">
      Nous sommes disponibles pour vous aider
    </h1>
    <div className="flex flex-col md:flex-row justify-center">
      <Form />
      <ContactInfo />
    </div>
  </Layout>
)

export default Contact
