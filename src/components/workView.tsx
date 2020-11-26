import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "./layout"
import SEO from "./seo"
import { useDeviceDetect } from "../utils/useDeviceDetect"
import Link from "gatsby-plugin-transition-link/AniLink"
import eye from "../images/eye.png"
import info from "../images/info.png"

// template page generated automatically for each work

type WorkViewProps = {
  data: any
}

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-top: 150px;
  }
`
const Info = styled.div`
  .part1 {
    position: fixed;
    top: 450px;
    left: -150px;
    width: 500px;
    transform: rotate(90deg);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .part2 {
    position: fixed;
    top: 400px;
    right: -150px;
    width: 500px;
    transform: rotate(-90deg);
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    margin: 20px auto 100px;
    justify-content: flex-start;
    .part1,
    .part2 {
      transform: initial;
      position: initial;
      width: 80vw;
      margin: 0 auto;
      p {
        padding: 10px;
        margin: 0;
      }
    }
  }
`

const MoreInfoButton = styled.div`
  position: fixed;
  right: 50px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s;
  height: 50px;
  width: 50px;

  img {
    height: 60px;
  }

  .info-icon {
    height: 100px;
  }
`

const WorkView = (props: WorkViewProps) => {
  const { title, medium, size, year, image, slug } = props.data.worksJson
  const [isShowInfo, setIsShowInfo] = useState(false)
  const { isMobile } = useDeviceDetect()

  const pageTitle = slug.split("/")[0].split("-")[0]

  return (
    <Layout>
      <Container>
        <SEO title={pageTitle} />
        <Link fade to="/">
          <Img fluid={image.childImageSharp.fluid} />
        </Link>
        <MoreInfoButton
          onClick={() => {
            if (isMobile) {
              setIsShowInfo(!isShowInfo)
              window.scrollTo({ top: 2000, behavior: "smooth" })
            }
          }}
          onMouseEnter={() => setIsShowInfo(true)}
          onMouseLeave={() => setIsShowInfo(false)}
        >
          {!isShowInfo ? (
            <img src={eye} alt="info" />
          ) : (
            <img src={info} alt="info" className="info-icon" />
          )}
        </MoreInfoButton>
        {isShowInfo && (
          <Info>
            <div className="part1">
              <p>{title}</p>
              <p>{medium}</p>
            </div>
            <div className="part2">
              <p>{size}</p>
              <p>{year}</p>
            </div>
          </Info>
        )}
      </Container>
    </Layout>
  )
}

export default WorkView

export const query = graphql`
  query workQ($id: String!) {
    worksJson(id: { eq: $id }) {
      title
      slug
      medium
      size
      year
      image {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
