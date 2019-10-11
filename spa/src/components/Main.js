import React from 'react'
import Row from './Row'
import Path from './Path'
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
        this.goHome = this.goHome.bind(this);
    }

    emersion(path)
    {
        const index = path.lastIndexOf('/', path.length - 2);
        return path.substring(0, index) + '/'; 
    }

    deepening(path, folder)
    {
        if (path[path.length - 1] === '/')
            return path + folder;
        return path + '/' + folder;
    }

    handleClick(item) {
        this.setState({path: this.deepening(this.state.path, item.name)}, () => {
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

    goHome() {
        this.setState({path: this.state.homePath}, () => {
            const newData = this.disk.requestData(this.state.path).items;
            this.setState({data: newData});
        }); 
    }

    render() {
        return(
            <div id="main">
                {
                    this.state.homePath !== this.state.path ?
                    <Path isBackExists={true} 
                            goBack={this.goBack}
                            goHome={this.goHome}/> :
                    
                    <Path   goBack={this.goBack}
                            goHome={this.goHome}/>
                }

                <div id="main-content">
                    <div role="main" className="container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Индекс</th>
                                    <th scope="col">Имя файла</th>
                                    <th scope="col">Тип файла</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.length === 0 ? "Каталог пуст..." :
                                    this.state.data.map((item, index) => {
                                    return <Row key={index} 
                                                index={index} 
                                                item={item} 
                                                handleClick={ item.type === "dir" && (() => this.handleClick(item))} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )    
    }
}

export default Main;