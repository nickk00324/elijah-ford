import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink"

// this component is each individual image on the grid

type WorkCardProps = {
  title: string
  image: any
  slug: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`

const Image = styled(Img)`
  @media only screen and (max-width: 782px) {
    height: 300px;
  }
`

const WorkCard = (props: WorkCardProps) => {
  return (
    <Card>
      <Link fade to={`/work/${props.slug}`}>
        <Image fluid={props.image.childImageSharp.fluid} alt={props.title} />
      </Link>
    </Card>
  )
}

export default WorkCard
