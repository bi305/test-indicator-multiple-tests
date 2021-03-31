import React from "react";
import { Nav,  Navbar } from "react-bootstrap";

function Bar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Sub Heading 1</Nav.Link>
            <Nav.Link href="#deets">Test </Nav.Link>
            <Nav.Link href="#deets">Sub Heading 2</Nav.Link>
            <Nav.Link href="#deets">Sub Heading 3</Nav.Link>
            <Nav.Link href="#deets">Sub Heading 4</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;
