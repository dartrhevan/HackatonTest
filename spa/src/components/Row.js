import React from 'react'

const Row = props => {
    return (
        <tr>
            <th id="index">{props.index}</th>
            <td id="name">{props.item.name}</td>
            <td id="type">{props.item.type}</td>
        </tr>
    )
}

export default Row;