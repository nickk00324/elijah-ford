import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [scrollPos, setScrollPos] = useState([])
  const [initial, setInitial] = useState(true)
  const [scaleAmount, setScaleAmount] = useState(1)

  return (
    <myContext.Provider
      value={{
        scrollPos,
        setScrollPos: setScrollPos,
        initial,
        setInitial: setInitial,
        scaleAmount,
        setScaleAmount: setScaleAmount,
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
