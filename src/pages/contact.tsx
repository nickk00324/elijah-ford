import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"
import Contact from "../components/contact"

const StyledContact = styled.div`
  height: 100vh;
`

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StaticPage title="Contact">
        <Contact />
      </StaticPage>
    </Layout>
  )
}

export default ContactPage
