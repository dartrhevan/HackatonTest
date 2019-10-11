import React from 'react'
import Row from './Row'
import Disk from '../requesting.js'

//import {items} from '../response'

class Main extends React.Component {
    constructor() {
        super();
		this.disk = new Disk();
        this.state = {
            data: this.disk.requestData().items,
            path: this.disk.path
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(item) {
        /*this.state.path = addPath(this.state.path, item.name);
        this.state.data = this.disk.requestData().items;*/
        this.setState({path: addPath(this.state.path, item.name), data: this.disk.requestData().items});
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
                    return <Row key={index} index={index} item={item} handleClick={this.handleClick} />
                })}
            </div>
        )    
    }

    emersion(path, folder)
    {
        return path.substring(0, path.length - folder.length - 1);
    }

    deepening(path, folder)
    {
        return path+'/'+folder;
    }
}

export default Main;