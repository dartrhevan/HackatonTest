import React from 'react'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">Просмотр файлов вашего Яндекс-Диска</a>
                {
                    !props.isEntered &&
                    <a className="btn btn-outline-secondary" href="https://oauth.yandex.ru/authorize?response_type=code&client_id=3614a67fb38645fe90cc5fe066f84746&force_confirm=true">Вход</a>
                }
            </div>
        </nav>
    )
}

export default Header;