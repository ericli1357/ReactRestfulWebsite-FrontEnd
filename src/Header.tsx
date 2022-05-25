import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

export const Header = () => (
  <Navbar collapseOnSelect bg="primary" variant="dark" id="header" expand="md">
    <Container>
      <Navbar.Brand href="home">Eric Li</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
