import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import WorkCard from "./workCard"

// presentational component for work cards

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(750px, 1fr));
  grid-gap: 2rem;
  justify-content: space-between;
  width: 250vw;
  transform-origin: top left;
  transform: scale(${props => props.scaleAmount});
  background-color: white;

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 225px;
  }

  @media only screen and (max-width: 782px) {
    grid-auto-rows: 300px;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

type WorksProps = {
  scaleAmount: number
}

const Works = (props: WorksProps) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWorksJson {
        edges {
          node {
            title
            slug
            image {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const allWorks = data.allWorksJson.edges

  return (
    <Grid scaleAmount={props.scaleAmount}>
      {allWorks.map((w: any) => (
        <WorkCard
          title={w.node.title}
          image={w.node.image}
          slug={w.node.slug}
          key={w.node.title}
        />
      ))}
    </Grid>
  )
}

export default Works
