import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <p className="text-sadi-blue-600 text-center text-2xl font-bold">
      Welcome to your new Services.
    </p>
  </Layout>
)

export default Services
