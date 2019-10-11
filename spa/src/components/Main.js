import React from 'react'
import Row from './Row'
import 'react-bootstrap'
import Disk from '../requesting.js'

class Main extends React.Component {
    constructor() {
        super();
        this.disk = new Disk();
        this.state = {
            data: this.disk.requestData().items
        }
    }

    render() {
        return (
            <div role="main" class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Индекс</th>
                            <th scope="col">Имя файла</th>
                            <th scope="col">Тип файла</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item, index) => {
                            return <Row key={index} index={index} item={item} />
                        })}
                    </tbody>
                </table>
            </div>


        )
    }
}

export default Main;