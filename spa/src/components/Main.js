import React from 'react'
import Row from './Row'
import Disk from '../requesting.js'

class Main extends React.Component {
    constructor() {
        super();
		this.disk = new Disk();
        this.state = {
            data: this.disk.requestData().items,
            path: this.disk.path,
            homePath: this.disk.path
        }
        this.handleClick = this.handleClick.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    emersion(path)
    {
        const index = path.lastIndexOf('/', path.length - 2);
        return path.substring(0, index) + '/'; 
    }

    deepening(path, folder)
    {
        return path + folder;
    }

    handleClick(item) {
        this.setState({path: this.deepening(this.state.path, item.name)}, () => {
            console.log(this.state.path);
            const newData = this.disk.requestData(this.state.path).items;
            this.setState({data: newData});
        });    
    }

    goBack() {
        this.setState({path: this.emersion(this.state.path)}, () => {
            const newData = this.disk.requestData(this.state.path).items;
            this.setState({data: newData});
        });
    }

    render() {
        return(
            <div id="main">
                
                <div id="row-heading">
                    <span>Номер файла</span>
                    <span>Название файла</span>
                    <span>Тип файла</span>
                </div>

                {
                    this.state.homePath !== this.state.path && 
                    <div id="go-back" onClick={this.goBack}>
                        .../
                    </div>
                }

                {this.state.data.map((item, index) => {
                    return <Row key={index} 
                                index={index} 
                                item={item} 
                                handleClick={ item.type === "dir" && (() => this.handleClick(item))} />
                })}
            </div>
        )    
    }
}

export default Main;