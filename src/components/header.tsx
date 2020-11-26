import React, { useState } from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link/AniLink"
import { animated as a, useTransition } from "react-spring"
import { useDeviceDetect } from "../utils/useDeviceDetect"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  position: fixed;
  z-index: 10;
  left: 50px;
  top: 20px;

  p {
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    justify-content: center;
  }
`

const Logo = styled.div`
  font-weight: 400;
  font-size: 48px;
  letter-spacing: 5px;
  transition: all 0.5s;

  &:hover {
    color: ${props => (props.isMobile ? "black" : props.theme.red)};
  }
`

const Menu = styled(a.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 72px;
  width: 328px;
  height: 100px;
  a {
    margin: 10px 0;
    width: 75px;

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${props => props.theme.blue};
    }
  }
`

const Header = () => {
  const [isHovering, setIsHovering] = useState(false)
  const { isMobile } = useDeviceDetect()

  const transitions = useTransition(isHovering, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <Container
      onMouseEnter={() => {
        if (!isMobile) setIsHovering(true)
      }}
      onMouseLeave={() => {
        if (!isMobile) setIsHovering(false)
      }}
    >
      {isMobile ? (
        <Logo onClick={() => setIsHovering(!isHovering)} isMobile>
          <p>Elijah Ford</p>
        </Logo>
      ) : (
        <Logo>
          <Link fade to="/">
            <p>Elijah Ford</p>
          </Link>
        </Logo>
      )}

      <>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <Menu key={key} style={props}>
                {isMobile && (
                  <Link fade to="/">
                    Home
                  </Link>
                )}
                <Link fade to="/press">
                  Press
                </Link>
                <Link fade to="/contact">
                  Contact
                </Link>
              </Menu>
            )
        )}
      </>
    </Container>
  )
}

export default Header
