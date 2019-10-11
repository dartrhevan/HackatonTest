import React from 'react'

const Row = props => {
    return(
        <div onClick={props.handleClick} className={props.item.type === "dir" ? "row dir" : "row"}>
            <span id="index">{props.index}</span>
            <span id="name">{props.item.name}</span>
            <span id="type">{props.item.type}</span>
        </div>
    )
}

export default Row;