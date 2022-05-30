import React from 'react'
import {Col,Row,Container,Button} from 'react-bootstrap'
export default function ShoppingCartDetails({product}) {
  return (
      <Row>
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src= "https://shop-cdn-m.mediazs.com/bilder/animonda/carny/adult/x/g/1/400/51176_pla_animonda_carny_adult_rind_huhn_entenherzen_200g_hs_01_1.jpg"
                alt=""
              />
                <p></p>
                <Row>
                  <Col xs={6}>
                    <strong>{product.productTitle}</strong>
                  </Col>
                  <Col xs={6}></Col>
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
