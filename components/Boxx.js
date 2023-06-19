import React from 'react'
import "./Boxx.css"
const Boxx = ({value,onClick}) => {
  const style = value === "x" ? "box x " : "box o"
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Boxx


