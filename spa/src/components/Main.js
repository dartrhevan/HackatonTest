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

    componentDidMount() {
        if (this.state.data.token !== "undefined") {
            this.props.sendState();
        }
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
                        <table className="table table-hover" >
                            <thead>
                                <tr>
                                    <th class="w-5" scope="col"></th>
                                    <th class="w-50" scope="col">Имя</th>
                                    <th class="w-20" scope="col">Дата изменения</th>
                                    <th class="w-20" scope="col">Время изменения</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.length === 0 ? 
                                    <div id="empty">Каталог пуст...</div> :
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