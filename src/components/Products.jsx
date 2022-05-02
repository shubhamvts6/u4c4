import React, { useEffect } from "react";

import { Select } from "./Styled";

import { Grid } from "./Styled";

export const Products = () => {
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    
    fetch(`https://movie-fake-server.herokuapp.com/products`)
    .then((response) => response.json())
    .then((item) => console.log(item))
    .catch((err) => {
     console.log(err.message);
    });
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">

     
        {/* iterate data and show each POroduct card */


// Products.map((item)=>{
//   return (
//     <div key={item.id} >
//       <h4>{item.title}</h4>
//       <img src={item.image} alt=""/>
//       <h3>{item.brand}</h3>
//       <p>price:{item.price}</p>
//     </div>
//   )
// })
}     
      </Grid>
    </>
  );
};
