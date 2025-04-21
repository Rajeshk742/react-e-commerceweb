import React from 'react'
import { NavLink } from 'react-router'
import Card from './Card'

const Cart = ({ cart, setCart }) => {

  return (
    <>
      {cart.length === 0 ?

        (<>

          <div className="text-center my-5 py-3">
            <h1>Your Cart is Empty</h1>
            <NavLink to="/" className="btn btn-warning my-4 py-3 ">Continue Shopping...</NavLink>
          </div>
        </>)

        :
        (
          <>
            <div className="container my-5 " style={{ width: "54%" }}>
              {cart.map((product) => {
                return (
                  <>
                    <div className="card mb-3 my-5" style={{ width: "700px" }}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body text-center my-5">
                            <h5 className="card-title ">{product.title}</h5>
                            <h5 className="card-title">{product.description}</h5>
                            <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>

                            <button className="btn btn-warning">Buy Now</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

            </div>


          </>

        )

      }
      {
        cart.length !=0 && (<div className="container text-center my-5" style={{
          display:'flex',
          justifyContent:'center',
          alineItems:'center'}}
          >

<button className="btn btn-warning mx-5">CheckOut</button>
<button className="btn btn-danger" onClick= {()=>{setCart("")}}>Clear Cart</button>

</div>
)
      }

      

    </>
  )
}

export default Cart
