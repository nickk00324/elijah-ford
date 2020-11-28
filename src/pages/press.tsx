import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"
import Press from "../components/press"

const PressPage = () => {
  return (
    <Layout>
      <SEO title="Press" />
      <StaticPage title="Press">
        <Press />
      </StaticPage>
    </Layout>
  )
}

export default PressPage
