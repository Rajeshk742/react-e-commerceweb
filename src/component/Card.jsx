import React from 'react'
import {NavLink} from 'react-router-dom';


const Card = ({product, cart, setCart,addToCart}) => {

 

 // console.log("cart element = " , cart)
  return (
   
  <>
    <div  className="col-lg-4 col-md-6 col-sm-6 my-5 text-center">            
    <div  className="card " style={{ width: "18rem" }}>
        <NavLink to = {`/product/${product.id}`}>
        <img src={product.imgSrc} className="card-img-top" alt="..." />
        </NavLink>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
            <button className="btn btn-warning"onClick={()=>{addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}}>Add To Card</button>
        </div>
    </div>
</div>
</>
  )
}

export default Card
