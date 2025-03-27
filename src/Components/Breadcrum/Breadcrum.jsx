import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div>
      {/* <div>
        HOME 
        <img src={arrow_icon} alt="" /> SHOP
         <img src={arrow_icon} alt="" /> {product.category}
          <img src={arrow_icon} alt="" /> {product.name}
      </div> */}
    </div>
  )
}

export default Breadcrum
