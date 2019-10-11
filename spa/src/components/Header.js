import React from 'react'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div class="container">
                <a class="navbar-brand" href="#">SPA-Project</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation" disabled="true">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="btn btn-outline-secondary" href="">Вход</a>
            </div>
        </nav>
    )
}

export default Header;