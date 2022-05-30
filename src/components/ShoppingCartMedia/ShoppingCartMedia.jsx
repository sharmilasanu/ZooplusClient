import React, { Component } from "react";
import { Button, Row, Col,  Accordion } from "react-bootstrap";


function ShoppingCartMedia() {
    return(
    
            <Row>
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src=""
                alt="Generic placeholder"
              />
              
                <p>Dxracer Formula Gaming Chair (Black/Red)</p>
                <Row>
                  <Col xs={6}>
                    <strong>$48.99</strong>
                  </Col>
                  <Col xs={6}>1 piece</Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Button variant="primary" size="sm">
                      Details
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
                </Row>
            
    )
    
}

export default ShoppingCartMedia
