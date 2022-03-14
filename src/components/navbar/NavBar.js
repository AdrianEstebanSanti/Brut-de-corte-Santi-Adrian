import React from 'react'
import CartWidget from '../CartWidget'


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
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Cata de Vinos
                      </a>
                       <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Malbec</a></li>
                        <li><a className="dropdown-item" href="#">Cabernet Sauvignon</a></li>
                        <li><a className="dropdown-item" href="#">Chardonnay</a></li>
                        <li><a className="dropdown-item" href="#">Merlot</a></li>
                      </ul>
                    </li>
                    <a className="nav-link" href='/' >Elaborá tu Vino</a>
                    <a className="nav-link" href='/'>Tienda</a>
                    <CartWidget/>
                 </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar