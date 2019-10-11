import React from 'react'

const Path = props => {
    return (
        <div id="path">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="btn-group btn-group-lg" role="group" aria-label="...">
                            <button type="button" className="btn btn-secondary"
                                    onClick={() => props.goHome()}>Home</button>
                            {
                                props.isBackExists && 
                                <button type="button" className="btn btn-secondary" 
                                        onClick={() => props.goBack()}>Back</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Path;