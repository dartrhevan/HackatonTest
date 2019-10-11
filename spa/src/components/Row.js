import React from 'react'

const Row = props => {
    return (
        <tr>
            <td id="index">{props.index}</td>
            <td id="name">{props.item.name}</td>
            <td id="type">{props.item.type}</td>
        </tr>
    )
}

export default Row;