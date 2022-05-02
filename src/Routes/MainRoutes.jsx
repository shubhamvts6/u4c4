import React from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"

import { Navbar } from "../components/Navbar";
import {About} from "../components/About"
import {Home} from "../components/Home"
import { Products } from "../components/Products";


const MainRoutes = () => {
  return <>
  {/* Navbar and all the routes */}
  <>
      <BrowserRouter>
      <Navbar />
      <Routes>
       
       <Route path='/' element=
       {<Home/>}/>
       <Route path='/About' element=
       {<About/>}/>


       <Route path='/Products' element ={<Products/>}/>

       {/* <Route path='/products/men' element=
       {<Men/>}/> */}
    
      </Routes>
      </BrowserRouter>
    </>
  </>;
};
export { MainRoutes };
