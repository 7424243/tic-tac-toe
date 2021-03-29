import React, {useState} from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

function Game() {

    //set the board as empty initially
    //'board' is the state
    //'setBoard' is the setState
    const [board, setBoard] = useState(Array(9).fill(null))

    const [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(board)
    
    const handleClick = (i) => {
        const boardCopy = [...board]
        //if user clicked an occupied square  or if game is won, return
        if(winner || boardCopy[i]) {
            return
        }
        //put an X or O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <div>
            <h1>Tic-Tac-Toe Game</h1>
            <Board squares={board} onClick={handleClick}/>
        </div>
    )
}

export default Game