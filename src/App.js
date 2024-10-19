import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Addtocart from './Component/Addtocart';
import Addtolike from './Component/Addtolike';

const App = () => {
  const [cart, setcart] = useState([]);
  const [tolike, settolike] = useState([]);
  const [view, setView] = useState('main');

  const handlelike = (item) => {
    let likepresent = false;
    tolike.forEach((productlike) => {
      if (item.id === productlike.id) {
        likepresent = true;
      }
    });
    if (likepresent) return;
    settolike([...tolike, item]);
  };

  const handleitem = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        ispresent = true;
      }
    });
    if (ispresent) return;
    setcart([...cart, item]);
  };

  return (
    <div>
      <Navbar
        size={cart.length}
        sizelike={tolike.length}
        setView={setView} 
      />
      {view === 'main' && <Main handleitem={handleitem} handlelike={handlelike} />}
      {view === 'cart' && <Addtocart cart={cart} setcart={setcart} />}
      {view === 'like' && <Addtolike tolike={tolike} settolike={settolike} sizelike={tolike.length} />}
    </div>
  );
};
export default App;
