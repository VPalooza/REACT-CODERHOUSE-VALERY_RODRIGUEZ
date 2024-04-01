import { CartWidget } from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Tiendita de mascotas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/category/alimento" as={NavLink}>Alimentos</Nav.Link>
                        <Nav.Link to="/category/accesorios" as={NavLink}>Accesorios</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
};
