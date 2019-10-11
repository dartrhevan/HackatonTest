import React from 'react'
import dateFormat from 'dateformat'

const Row = props => {
    return(
        <tr onClick={props.handleClick} 
            className={props.item.type === "dir" && ("bg-light text-dark cursor-pointer")} 
            disabled={props.item.type !== "dir" && false}>
            <td id="type">
                {
                    props.item.type === "dir" ?
                    <img src="../icons/dir.png" className="icon"/> :
                    <img src="../icons/file.png" className="icon"/>
                }
            </td>
            <td id="name">{props.item.name}</td>
            <td id="index">{dateFormat(props.item.created, "mmm d, yyyy")}</td>
            <td id="index">{dateFormat(props.item.created, "HH:MM:ss")}</td>
            
        </tr>
    )
}

export default Row;