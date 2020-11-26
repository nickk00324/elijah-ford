import React from "react"
import styled from "styled-components"
import Slider from "@material-ui/core/Slider"

const Container = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 10;
  height: 200px;
  color: #001e82;

  p {
    transform: rotate(90deg);
  }
`

const ZoomSlider = styled(Slider)`
  &.MuiSlider-root {
    color: #001e82;
  }
`

type ZoomProps = {
  scaleAmount: number
  setScaleAmount: (n: number) => void
}
const Zoom = (props: ZoomProps) => {
  const { scaleAmount, setScaleAmount } = props

  const handleChange = (event: any, newValue: any) => {
    setScaleAmount(newValue)
  }
  return (
    <Container>
      <p>Zoom</p>
      <ZoomSlider
        defaultValue={1}
        value={scaleAmount}
        onChange={handleChange}
        orientation="vertical"
        min={0.2}
        max={3}
        step={0.1}
        aria-labelledby="continuous-slider"
      />
    </Container>
  )
}

export default Zoom
