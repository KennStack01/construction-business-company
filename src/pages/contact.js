import React from "react"
import ContactInfo from "../components/Contact/ContactInfo"
import Form from "../components/Contact/Form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <h1 className="text-2xl md:text-4xl text-center my-10 md:my-16 text-sadi-blue-500 font-bold justify-self-start">
      Vous pouvez nous écrire directement par ce Formulaire
    </h1>
    <div className="flex flex-col justify-center">
      <Form width="3/5" />
      <ContactInfo />
    </div>
  </Layout>
)

export default Contact
