import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import ShoppingCartMedia from '../ShoppingCartMedia/ShoppingCartMedia';

function ShoppingCart(props) {
   
    
    


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           My Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>
          < ShoppingCartMedia />
        </Modal.Body>
       
      </Modal>
    );
  }

  export default ShoppingCart