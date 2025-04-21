import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { items } from './Data';
import Product from './Product';

const SearchItems = ({cart, setCart}) => {

  // console.log(useParams());
  const {term} = useParams();
  const [searchData, setSearchData] = useState([]);
  useEffect(()=>{
      
    const filteredData = ()=>{
      const data = items.filter((curElem)=>{
       return curElem.title.toLowerCase().includes(term.toLowerCase());  //note if we use curly bracess in filter the method then it is mendatory to return a value but if we do not use curly brace then there is no need to write a returning a value it automatcaly retun a value. 
      });
      // console.log(data);
      setSearchData(data);
    }


    filteredData();

  },[term])
 

 
  return (
    <div>
     <Product cart={cart} setCart={setCart} items = {searchData}/>    </div>
  )
}

export default SearchItems
