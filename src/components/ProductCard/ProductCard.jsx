import {React,useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProductCard({product}){
  return <>
  <Card style={{ width: '17rem',padding : '2rem'}}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title style={{ fontWeight: 700, fontSize: "20px" }}>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}> {product.price} €</Card.Subtitle>
                <Link to={`/product/${product._id}`} >
                    <Button  variant="info" className="mt-4" >More</Button>       
                </Link>
            </Card.Body>
        </Card>
  </>
  
}

export {ProductCard}