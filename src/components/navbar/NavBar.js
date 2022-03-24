import React from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a href='/'>
               <img src='./logo-BrutdeCorte-icon-nav.png' width='70'/>
            </a>
            < Link className='nav-link text-white fw-bold fs-6' to='/'>Brut de Corte</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Tienda
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/productos/malbec">Malbec</Link></li>
                        <li><Link className="dropdown-item" to="/productos/merlot">Merlot</Link></li>
                        <li><Link className="dropdown-item" to="/productos/rose">Rosé</Link></li>
                        <li><Link className="dropdown-item" to="/productos/torrontes">Torrontes</Link></li>
                      </ul>
                    </li>
                    <Link className="nav-link" to='/' >Elaborá tu Vino</Link>
                    <Link className="nav-link" to='/'>Cata de Vinos</Link>
                    <CartWidget/>
                 </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar