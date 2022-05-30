import React,{useState,useContext,useEffect} from 'react';
import axios from "axios"
import { Container, Row, Col, Button,Dropdown} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UserContext from '../Context/Context';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const ProductView = () => {
  const { productId }  = useParams();
  const [cart_val,setCartVal] = useContext(UserContext);
  const [product,setProduct] = useState([])
  const [quantity,setQuantity] = useState([])
  useEffect(() => {
    axios
    .get('https://zooplusecomm.herokuapp.com/api/products/search/'+ productId)
    .then(
      response => {
        setProduct(response.data)
      })
      .catch(err => {
        console.error(err)
    });
  
  }, []);
  
    function generateUserId() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength =  8;
    for ( var i = 0; i < charactersLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
   }
   return result;
   
}

  function addToCart()
  {
  setCartVal(cart_val+1)   //updating the userContext value
  console.log("cart value"+cart_val)
  const userId= "sharmila"

    axios
    .put('https://zooplusecomm.herokuapp.com/api/cart/sharmila', {
      "userId": userId, 
      "products":
       {
         "productId": product.productId,
         "productImage" : product.imageUrl,
         "productPrice" : product.price,
         "productTitle" : product.title,
         "quantity": 1,
       }
    })
    .then(
      response => {
        console.log(response.status)
      })
      .catch(err => {
        console.error(err)
    });
      console.log("updated the cart")
    }


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
        <Row>
        <h3 style={{ "text-align": "center" }}>Currently on Sale</h3>
        <ImageCarousel/>
        </Row>
        </Container>
      
    
    );
  
}
export default ProductView