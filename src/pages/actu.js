import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Actu = () => (
  <Layout>
    <SEO title="Actu" />
    <p className="text-sadi-blue-600 text-center text-2xl font-bold">
      Welcome to your new Actu.
    </p>
  </Layout>
)

export default Actu
