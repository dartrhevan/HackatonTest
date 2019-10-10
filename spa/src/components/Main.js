import React from 'react'
import Row from './Row'

import {items} from '../response'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: items 
        }
    }

    render() {
        return(
            <div id="main">
                <div id="row-heading">
                    <span>Номер файла</span>
                    <span>Название файла</span>
                    <span>Тип файла</span>
                </div>
                {this.state.data.map((item, index) => {
                    return <Row key={index} index={index} item={item}/>
                })}
            </div>
        )    
    }
}

export default Main;