import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import { toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({cart, setCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => {
      return (product.id == id);
    });
    //  console.log(filterProduct);
    setProduct(filterProduct[0]);


    const relatedProducts = items.filter((curElem) => {
      return (curElem.category === product.category)
    });

    setRelatedProducts(relatedProducts);
    //  console.log(relatedProducts)

  }, [id, product.category]);

  // console.log(product)
  // console.log(relatedProducts)

  const addToCart = (id,price,title,description,imgSrc)=>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, obj]);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
   
  }


  return (
    <>

      <div className="container con" >
        <div className="img">
          <img src={product.imgSrc} alt="error" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
          <button className="btn btn-warning" onClick={()=>{addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}}>Add To Card</button>
        </div>

      </div>
      <h1 className="text-center">Related Product</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetails;
