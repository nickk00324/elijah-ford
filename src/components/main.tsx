import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import ScrollContainer from "react-indiana-drag-scroll"
import Works from "./works"
import Zoom from "./zoom"

// logic component that wraps the works component

const DragContainer = styled(ScrollContainer)`
  height: 100vh;
  width: 100vw;
  overflow: scroll !important;
`

type MainProps = {
  initial: boolean
  scrollPos: number[]
  setInitial: (b: boolean) => void
  setScrollPos: (n: number[]) => void
  scaleAmount: number
  setScaleAmount: (n: number) => void
}

const Main = (props: MainProps) => {
  const container = useRef(null)
  const {
    initial,
    scrollPos,
    setInitial,
    setScrollPos,
    scaleAmount,
    setScaleAmount,
  } = props

  useEffect(() => {
    if (initial && container !== null) {
      const { scrollLeft, scrollTop } = container.current.container.current
      // on initial visit, or refresh, place the scroll position in a random place
      container.current
        .getElement()
        .scrollTo(Math.random() * 5000, Math.random() * 5000)
      setInitial(false)
      setScrollPos([scrollLeft, scrollTop])
    } else if (!initial && container !== null) {
      // remember the scroll position when opening a new page
      container.current.getElement().scrollTo(scrollPos[0], scrollPos[1])
    }
  }, [])

  const handleScroll = () => {
    if (container !== null) {
      const { scrollLeft, scrollTop } = container.current.container.current
      setScrollPos([scrollLeft, scrollTop])
    }
  }

  return (
    <>
      <DragContainer onScroll={handleScroll} ref={container}>
        <Works scaleAmount={scaleAmount} />
      </DragContainer>
      <Zoom scaleAmount={scaleAmount} setScaleAmount={setScaleAmount} />
    </>
  )
}

export default Main
