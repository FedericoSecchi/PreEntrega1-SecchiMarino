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

export default CartWidget;
