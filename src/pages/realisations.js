import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import RealisationsList from "../components/Realisations/RealisationsList"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Realisations = () => (
  <Layout>
    <SEO title="Réalisations" />
    <RealisationsList />
  </Layout>
)

export default Realisations
