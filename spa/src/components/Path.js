import React from 'react'

function Path(props) {
    return (
        <div id="path">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <div class="btn-group btn-group-lg" role="group" aria-label="...">
                            <button type="button" class="btn btn-secondary"
                                    onClick={() => props.goHome()}>Home</button>
                            {
                                props.isBackExists && 
                                <button type="button" class="btn btn-secondary" 
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