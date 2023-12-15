
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Nombre de la Tienda</a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 2</a>
            </li>
            {/* Agrega más categorías según sea necesario */}
          </ul>
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
