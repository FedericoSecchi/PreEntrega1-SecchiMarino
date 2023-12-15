import React from 'react';

const CartWidget = () => {
  const cartItemsCount = 5; 

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-danger">{cartItemsCount}</span>
    </div>
  );
};


const NavBar = () => {
  return (
    <nav>
      {/* ... Otros elementos de la barra de navegación */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
