import React from 'react'

const Row = props => {
    return(
        <tr onClick={props.handleClick} 
            className={props.item.type === "dir" && "cursor-pointer"} 
            disabled={props.item.type !== "dir" && false}>
            <td id="index">{props.index}</td>
            <td id="name">{props.item.name}</td>
            <td id="type">{props.item.type === "dir" ? "Папка" : "Файл"}</td>
        </tr>
    )
}

export default Row;