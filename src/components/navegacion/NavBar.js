import React from 'react'


const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a href='/'>
               <img src='./logo-BrutdeCorte-icon-nav.png' width='70'/>
            </a>
            <a className='nav-link text-white fw-bold fs-6' href='/'>Brut de Corte</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto ">
                    <a className="nav-link active" aria-current="page" href='/' >Inicio</a>
                    <a className="nav-link" href='/' >Cata de Vinos</a>
                    <a className="nav-link" href='/' >Elaborá tu Vino</a>
                    <a className="nav-link" href='/'>Tienda</a>
                 </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar