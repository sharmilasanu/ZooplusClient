import React from 'react';
import {Col,Row} from 'react-bootstrap'
import { ProductCard } from '../ProductCard/ProductCard';

function ProductList({products}) {

    return <>
        <Row style={{ margin: '2rem',padding: '1rem'}}>
        {products.map(product => (
            <Col sm={6} md={5} lg={3}  className="mb-4" key={product._id}>
                <ProductCard product={product} />
            </Col>
        ))}
     </Row>
    </>;
}

export default ProductList