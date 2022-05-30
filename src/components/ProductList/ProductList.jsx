import {React,useState,useEffect} from 'react';
import {Col,Row,Form,FormControl,Button} from 'react-bootstrap'
import { ProductCard } from '../ProductCard/ProductCard';
import axios from "axios"
function ProductList({products}) {

    const [allProducts,setAllProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState(allProducts);
    
    useEffect(() => {
        axios('https://zooplusecomm.herokuapp.com/api/products')
        .then(response => {
        console.log(response.data)
        setAllProducts(response.data);
        setFilteredProducts(response.data);
        })
        .catch(error => {
        console.log(error);
        })
        }, []);

        const searchItems = (event) => {
            let value = event.target.value.toLowerCase();
            let result = [];
            console.log(value);
            result = allProducts.filter((data) => {
            return data.title.search(value) != -1;
            });
            setFilteredProducts(result);
            }

    return <>

      <Form style={{ margin: '2rem',padding: '1rem'}} className="d-flex">
        <FormControl style={{ width : "30%"}} onChange={(event) => searchItems(event)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row style={{ margin: '1.5rem',padding: '0.5rem'}}>
        {filteredProducts.map(product => (
            <Col sm={6} md={5} lg={3}  className="mb-4" key={product._id}>
                <ProductCard product={product} />
            </Col>
        ))}
        </Row>
     
    </>;
}

export default ProductList