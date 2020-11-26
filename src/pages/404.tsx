import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StaticPage>
      <h1>404: Not Found</h1>
      <p>there is nothing here! uwu</p>
    </StaticPage>
  </Layout>
)

export default NotFoundPage
