import React from 'react'

//inline style: JavaScript object
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

function Square(props) {
    const {onClick, value} = props
    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square