import React from "react"
import styled from "styled-components"

const VideoStyled = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoStyled className="video">
    <iframe
      src={videoSrcURL}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </VideoStyled>
)
export default Video
