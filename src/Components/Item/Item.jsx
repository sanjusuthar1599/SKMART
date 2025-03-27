import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div>
      <div>
      <Link to={`/product/${props.id}`}><img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="Product" /></Link>
        <p>{props.name}</p>
        <div className='flex '>
          <div>
            <p>${props.new_price}</p>
          </div>
          <div className='ms-4'>
            <p className="line-through text-gray-500">${props.old_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
