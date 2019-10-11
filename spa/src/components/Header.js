import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">SPA-Project</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation" disabled="true">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="btn btn-outline-secondary" href="">Вход</a>
            </div>
        </nav>
    )
}

export default Header;