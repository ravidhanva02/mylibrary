import React from 'react';
import '../Style/Navbar.css';

const Navbar = ({ size, sizelike, setView }) => {
  return (
    <div className='navbar-main'>
      <nav>
        <div className='logo' onClick={() => setView('main')}>
          <span>My<span className='library'>Library</span></span>
        </div>
        <div className='nav-icon'>
          <div className='nav-like' onClick={() => setView('like')}>
            <i className="fa-regular fa-heart"></i>
            <span className='zero'>{sizelike}</span>
          </div>
          <div className='card' onClick={() => setView('cart')}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='zero'>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
