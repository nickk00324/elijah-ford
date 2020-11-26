import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"

const StyledContact = styled.div`
  height: 100vh;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StaticPage>
        <div>Coming soon!</div>
      </StaticPage>
    </Layout>
  )
}

export default Contact
