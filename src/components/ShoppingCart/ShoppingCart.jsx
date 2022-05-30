import {React,useContext} from 'react'
import {Modal,Row} from 'react-bootstrap';
import ShoppingCartMedia from '../ShoppingCartMedia/ShoppingCartMedia';
import UserContext from '../Context/Context';


function ShoppingCart(props) {
  const [cart_val,setCartVal] = useContext(UserContext);

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
          {cart_val>0 ? 
         
         /* <ShoppingCartMedia   />*/ 
         <Row>
         <h3 style={{ "text-align" :"center"}}>shopping cart under construction </h3>
         </Row>
          :
          <Row>
          <h3 style={{ "text-align" :"center"}}>Cart is empty </h3>
          <img
          alt=""
          src="/empty-cart.svg"
          width="200"
          height="200"
          className="d-inline-block align-top"
          />
          </Row>
          }
        </Modal.Body>
      </Modal>
    );
  }

  export default ShoppingCart