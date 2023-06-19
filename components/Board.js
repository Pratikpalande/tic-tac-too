import React from 'react'
import Boxx from "./Boxx"
import "./Board.css"


const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {board.map((value, idx) => {
            return <Boxx  value={value} onClick={()=> value===null && onClick(idx)}/>
            })}
       
    </div>
  )
}

export default Board
