import React from "react"
import "../styles/fonts.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import { myContext } from "../../provider"

const IndexPage = () => {
  return (
    <myContext.Consumer>
      {(context: any) => {
        return (
          <>
            <Layout>
              <SEO title="Main" />
              <Main {...context} />
            </Layout>
          </>
        )
      }}
    </myContext.Consumer>
  )
}

export default IndexPage
