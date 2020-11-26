/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import "./layout.css"

// wraps elements to inject global styles

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{props.children}</main>
    </ThemeProvider>
  )
}

export default Layout
