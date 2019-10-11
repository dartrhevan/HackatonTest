import React from 'react'

const Row = props => {
    return(
        <tr onClick={props.handleClick} 
            className={props.item.type === "dir" && "cursor-pointer"} 
            disabled={props.item.type !== "dir" && false}>
            <td id="index">{props.index}</td>
            <td id="name">{props.item.name}</td>
            <td id="type">
                {
                    props.item.type === "dir" ?
                    <img src="../icons/dir.png" className="icon"/> :
                    <img src="../icons/file.png" className="icon"/>
                }
            </td>
        </tr>
    )
}

export default Row;