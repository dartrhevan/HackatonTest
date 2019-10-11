import React from 'react'
import { prototype } from 'events'

const Row = props => {
    return(
        <div onClick={props.handleClick} className={props.item.type === "dir" ? "dir" : "row"}>
            <span id="index">{props.index}</span>
            <span id="name">{props.item.name}</span>
            <span id="type">{props.item.type}</span>
        </div>
    )
}

export default Row;