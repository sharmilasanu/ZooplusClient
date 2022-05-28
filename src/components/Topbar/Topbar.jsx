import React from 'react'
import { Navbar,Container,Nav,NavDropdown, Form,Button,FormControl,Badge} from 'react-bootstrap';
import './Topbar.css';
function Topbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src="/zooPoints.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       Zooplus
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </Nav>
      <Nav.Link >Login</Nav.Link>
      <Button variant="success">
  Shopping Cart <Badge bg="secondary"> 9</Badge>
  <span className="visually-hidden">unread messages</span>
</Button>

    </Navbar.Collapse>
    
  </Container>
 
</Navbar>
  )
}

export default Topbar