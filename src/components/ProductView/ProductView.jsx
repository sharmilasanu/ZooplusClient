import React,{useState,useContext} from 'react';
import axios from "axios"
import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UserContext from '../Context/Context';


const ProductView = () => {
 
  const [cart_val,setCartVal] = useContext(UserContext);
  const [product,setProduct] = useState([])
  const [quantity,setQuantity] = useState([])
  const { productId }  = useParams();
  
  function addToCart()
  {

    setCartVal(cart_val+1)
  axios
  .post('https://zooplusecomm.herokuapp.com/api/cart/', {
    "userId": "vishuu",
    "products":
     {
       "productId": productId,
       "quantity": "1"
     }
    
  })
  .then(
    response => {
      console.log(response.status)
    })
    .catch(err => {
      console.error(err)
  });
    console.log("added to cart")
  }
  function removeFromCart()
  {
    if(cart_val < 0 || cart_val==0){
      setCartVal(0)
    }
    else{
      setCartVal(cart_val-1)
    }
    
   console.log("added to cart")
    
  }
  

 
  axios
  .get('https://zooplusecomm.herokuapp.com/api/products/search/'+ productId)
  .then(
    response => {
      setProduct(response.data)
    })
    .catch(err => {
      console.error(err)
  });

    return (

        <Container>
        <Row>
        <Col className="m-6">
        <h1 style={{ fontWeight: 700 }}>{product.title}</h1>
        <img
          alt=""
          src= {product.imageUrl}
          width="400"
          height="400"
          className="d-inline-block align-top"
        />
        </Col>
        <Col>
        <h5> {product.description}</h5> 
        <h4> Price : {product.price}</h4>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             Quantity
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="">1</Dropdown.Item>
            <Dropdown.Item href="">2</Dropdown.Item>
            <Dropdown.Item href="">3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        <Col>
        <Button onClick={addToCart}>Add to Cart </Button>
        </Col>
        </Col>
        </Row>
        </Container>
        
    
    );
  
}
export default ProductView