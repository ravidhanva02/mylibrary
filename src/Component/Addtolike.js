import React from 'react'
import '../Style/Addtolike.css'

const Addtolike = ({tolike , settolike , sizelike , cart, setcart }) => {

  const likeDelete  = (id) =>{
    const updateLike = tolike.filter((item) => item.id !=id)
    settolike (updateLike);   
  };
  
  return (
    <div className='tolike-main'>
      {tolike.map((item) => (
        <div className='tolike-box' key={item.id}>
          <div className='tolike-img'>
            <img src={item.img}></img>

            <p>{item.title}</p>
          </div>
          
          <div>
            
            <button className='remove-btn' onClick={()=>likeDelete(item.id)} >Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total items Of Your favorite list :  </span>
        <span>  {sizelike}</span>
      </div>
    </div>
  )
}

export default Addtolike