import { CartWidget } from "./CartWidget";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <Navbar className="nav-bar" expand="sm" sticky="top">
                <Container fluid="sm" >
                    <Navbar.Brand href="/">Tienda aromática</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/category/vela" as={NavLink}>Velas</Nav.Link>
                        <Nav.Link to="/category/aceite" as={NavLink}>Aceites esenciales</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
};
