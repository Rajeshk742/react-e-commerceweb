import React from 'react';
// import { items } from './Data';
import { toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from './Card'


const Product = ({items,cart,setCart}) => {

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
           <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
 
            <div className="container my-5">
                <div className="row ">
                    {items.map((product) => {
                        return (
                        <Card key={product.id} product={product} cart={cart} setCart={setCart} addToCart = {addToCart}/>
                        )
                    })};
          </div>
            </div>

        </>
    );



}

export default Product;
