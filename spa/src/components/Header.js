import React from 'react'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="container">
    <a class="navbar-brand" href="#">SPA-Project</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="btn btn-outline-primary" href="https://vk.com/away.php?to=https%3A%2F%2Foauth.yandex.ru%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3D3614a67fb38645fe90cc5fe066f84746&cc_key=">Вход</a>
  </div>
</nav>
    )
}

export default Header;