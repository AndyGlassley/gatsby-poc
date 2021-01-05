import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero-banner"
import Listing from "../components/listing"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Listing title="Latest Articles" />
    <Listing title="Latest Products" />
  </Layout>
)

export default IndexPage
