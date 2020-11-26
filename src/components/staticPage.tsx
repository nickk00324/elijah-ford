import React from "react"
import styled from "styled-components"

// this is a page wrapper for non-index static pages

const StyledPage = styled.div`
  margin-top: 200px;
  margin-left: 50px;
`

const Page = props => {
  return <StyledPage>{props.children}</StyledPage>
}

export default Page
