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
                    <NavLink to="/" className="navbar-brand">Tienda aromática</NavLink>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/category/vela">Velas</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/aceite">Aceites esenciales</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
};
