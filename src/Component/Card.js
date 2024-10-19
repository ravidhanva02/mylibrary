import React from 'react'
import '../Style/Card.css'

const Card = ({item, handleitem, handlelike}) => {
    const { title, author, price, img } = item;
    return (
        <div className='cards-main'>
            <div className='cards'>
                <div className='image-box'>
                    <img src={img} alt='Images'></img>
                </div>
                <div className='details'>
                    <p className='title'>{title}</p>
                    <p className='author'>{author}</p>
                    <p className='price'>Price {price} /Rs</p>
                    <div className='btn'>
                        <button className='card-btn' onClick={()=> handleitem(item)}>Add to Card
                        </button>
                        <button className='card-like-btn' onClick={()=>handlelike(item)} >
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;