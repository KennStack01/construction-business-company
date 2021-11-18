import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = () => (
  <Layout>
    <SEO title="Not Found" />
    <div className="flex flex-col my-10">
      <p className="text-sadi-blue-600 text-center text-2xl font-bold">
        Page Not Found 👋
      </p>
      <Link
        to="/"
        className="font-semibold mx-auto text-center p-2 my-5 rounded-sm text-white bg-sadi-blue-700"
      >
        Cliquer ici pour à la Page D'Accueil
      </Link>
    </div>
  </Layout>
)

export default NotFound
