import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Topbar from '../Topbar/Topbar';
import HomePage from '../HomePage/HomePage';
import ProductView from '../ProductView/ProductView';
import UserContext from '../Context/Context';


const MainView = () => {
  const [cart_val,setCartVal] = useState(0); 
  return (
    <div className='main-view'>
    <UserContext.Provider value= {[cart_val,setCartVal]}>
    <Topbar/>
    
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route exact path="/product/:productId" element = {<ProductView/>}/>
      </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  )

}

export default MainView