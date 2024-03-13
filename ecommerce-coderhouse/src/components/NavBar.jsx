import { CartWidget } from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
    return (
        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Tiendita de mascotas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Alimentos</Nav.Link>
                        <Nav.Link href="#">Accesorios</Nav.Link>
                        <Nav.Link href="#">Muebles</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
};
