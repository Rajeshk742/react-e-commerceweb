import React, { useState } from 'react';
import { NavLink,  useLocation, useNavigate } from 'react-router-dom';
import {items} from './Data'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({setData, cart}) => {

// console.log(useLocation())
const location = useLocation();
const [searchTerm, setSearchTerm]= useState('');
const navigate = useNavigate();
// console.log(searchTerm);

const handleSumit = (e)=>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`);
  setSearchTerm('');

}

  const filterByCategory = (category)=>{
    const element = items.filter((product)=> product.category===category);
    // console.log(element);
    setData(element);
  };

  const filterByPrice = (price) => {
    const elementByPrice = items.filter((product)=>product.price >= price);
    // console.log(elementByPrice);
    setData(elementByPrice);
  }

  return (
    <>
    <header>
        <div className="nav-bar">
            <NavLink to={"/"} className="brand">E-cart</NavLink>
            <form onSubmit = {handleSumit} className="search-bar">

                <input value = {searchTerm} onChange = {(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder="Search Product" />

            </form>
            <NavLink to ="/cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <FaCartShopping style={{fontSize:"2.4rem"}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                         {cart.length}
              <span className="visually-hidden">unread messages</span>
                       </span>
            </button>
            </NavLink>
        </div>
      

      {
        location.pathname =="/"&& ( <div className="nav-bar-wrapper">
        <div className="item">Filter by{"->"}</div>
        <div className="item">No filter</div>
        <div className="item" onClick = {()=>{filterByCategory('mobiles')}}>Mobiles</div>
        <div className="item" onClick = {()=>{filterByCategory('laptops')}}>Laptops</div>
        <div className="item"onClick = {()=>{filterByCategory('tablets')}}>Tablets</div>
        <div className="item"onClick = {()=>{filterByPrice('29999')}}>{">=29999"}</div>
        <div className="item"onClick = {()=>{filterByPrice('49999')}}>{">=49999"}</div>
        <div className="item"onClick = {()=>{filterByPrice('69999')}}>{">=69999"}</div>
        <div className="item"onClick = {()=>{filterByPrice('89999')}}>{">=89999"}</div>
    </div>)
      }

       
    </header>
    </>
  )
};

export default Navbar;
