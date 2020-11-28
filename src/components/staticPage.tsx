import React from "react"
import styled from "styled-components"

// this is a page wrapper for non-index static pages

const StyledPage = styled.div`
  margin: 200px 50px;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    margin: 200px 25px;
  }

  .title {
    position: fixed;
    display: flex;
    margin: 0;

    @media only screen and (max-width: ${props => props.theme.mobileSize}) {
      left: 50%;
      justify-content: center;
      transform: translate(-50%, 0);
      top: 125px;
    }
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
  }
  p {
    line-height: 1.6;
  }

  h2 {
    margin-top: 0;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 2;

  @media only screen and (max-width: 1280px) {
    grid-column: 2 / span 3;
  }
  p {
    margin-top: 0;
  }
  a {
    &:hover {
      color: ${props => props.theme.blue};
    }
  }
`

const Page = props => {
  return (
    <StyledPage>
      <Container>
        <h2 className="title">{props.title}</h2>
        <Body>{props.children}</Body>
      </Container>
    </StyledPage>
  )
}

export default Page
