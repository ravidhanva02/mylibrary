import React, { useEffect, useState } from 'react'
import '../Style/Addtocart.css'

const Addtocart = ({ cart, setcart }) => {
  const [price, setprice] = useState([0])

  const handleprice = () =>{
    let  ans = 0;
    cart.map((item)=>{
      ans+= item.amount*item.price
     setprice(ans);
    });
  };
  
  useEffect(()=>{
    handleprice();
  });
   
  const cartDelete  = (id) =>{
    const updateCart = cart.filter((item) => item.id !=id)
    setcart (updateCart);   
  };

  const handlechange = (item, d) => {
    const tempCart = [...cart];
    const index = tempCart.findIndex((data) => data.id === item.id);

    if (index !== -1) {
      const updatedItem = tempCart[index];
      // Ensure karo ki amount number hai
      if (Number(updatedItem.amount) + d > 0) {
        updatedItem.amount = Number(updatedItem.amount) + d;  // String ko number mein convert karo
        setcart(tempCart);
      }
    }
  };

  return (
    <div className='cart-main'>
      {cart.map((item) => (
        <div className='cart-box' key={item.id}>
          <div className='cart-img'>
            <img src={item.img}></img>

            <p>{item.title}</p>
          </div>
          <div>
            <button className='plusminus-btn coral' onClick={() => handlechange(item, 1)}>+</button>
            <button className='amount-btn'>{item.amount}</button>
            <button className='plusminus-btn coral' onClick={() => handlechange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button className='remove-btn' onClick={()=> cartDelete(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price Of Your Cart  </span>
        <span>  Rs - {price}</span>
      </div>
    </div>
  )
}

export default Addtocart