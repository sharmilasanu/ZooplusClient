import {React,useContext,useState} from 'react'
import { Navbar,Container,Nav,Row, Form,Button,FormControl,Badge} from 'react-bootstrap';
import UserContext from '../Context/Context';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function Topbar() {
  const [cart_val,setCartVal] = useContext(UserContext);
  const [modalShow,setModalShow] = useState(false);
  return (
    <Row>
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="" >
        <img
          alt=""
          src="/zooPoints.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       Zooplus
      </Navbar.Brand >
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '300px' }}
        navbarScroll
      >
        
      </Nav>
      <Button onClick={() => setModalShow(true)} variant="success">
  Shopping Cart <Badge bg="secondary"> {cart_val}</Badge>
  <span className="visually-hidden">unread messages</span>
</Button>

  </Navbar.Collapse>
  </Container>
</Navbar>
<ShoppingCart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

</Row>

  )
}

export default Topbar