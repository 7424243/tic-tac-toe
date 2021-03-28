import React from 'react'

function Square(props) {
    const {onClick, value} = props
    return (
        <button onClick={onClick}>
            {value}
        </button>
    )
}

export default Square