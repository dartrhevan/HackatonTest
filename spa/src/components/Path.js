import React from 'react'

const Path = props => {
    return (
        <div id="path">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="btn-group btn-group-lg" role="group" aria-label="...">
                            <button type="button" className="btn btn-outline-secondary"
                                onClick={() => props.goHome()}><i class="fa fa-home fa-lg"></i></button>
                            {
                                props.isBackExists && 
                                <button type="button" class="btn btn-outline-secondary" 
                                    onClick={() => props.goBack()}><i class="fa fa-arrow-left fa-lg"></i></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Path;