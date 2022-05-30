import {React,useState,useEffect, useContext} from 'react'
import {Row} from 'react-bootstrap'
import axios from "axios"
import Topbar from '../Topbar/Topbar';
import ProductList from '../ProductList/ProductList';


 const HomePage = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://zooplusecomm.herokuapp.com/api/products")
      .then(
        response => {
          const products = response.data
          console.log(products)
          setProducts(products)
        })
        .catch(err => {
          console.error(err)
      });
  }, []);

    return (
      <Row>
       <ProductList products={products}/>
       </Row>
      )
}
export default HomePage