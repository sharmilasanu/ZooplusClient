import {React,useState} from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios"
import ShoppingCartDetails from '../ShoppingCartDetails/ShoppingCartDetails';
function ShoppingCartMedia() {
  const [cartItems,setCartItems] = useState([]);

  
  const userID = "sharmila"
  axios
  .get('https://zooplusecomm.herokuapp.com/api/cart/find/'+ userID)
  .then(
    response => {
      
      console.log(response.data)
      setCartItems(response.data)
    })
    .catch(err => { 
      console.error(err)
  });

    return(
       
       <Container>
           {cartItems.map(product => (
            <Col key={product._id}>
                <ShoppingCartDetails product={product} />
            </Col> 
            ))}
       </Container>
            
    )
    
}

export default ShoppingCartMedia
