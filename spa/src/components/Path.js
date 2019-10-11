import React from 'react'

function Path() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <div class="btn-group btn-group-lg" role="group" aria-label="...">
                        <button type="button" class="btn btn-secondary">Home</button>
                        <button type="button" class="btn btn-secondary">Back</button>
                    </div>
                </div>
                <div class="col-9">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>

            </div>
        </div>

    )
}

export default Path;