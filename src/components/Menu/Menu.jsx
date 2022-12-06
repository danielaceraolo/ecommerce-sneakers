import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import CartWidget from './../CartWidget/CartWidget';
import { useCartContext } from './../../context/CartContext';

import './Menu.css'

function Menu() {
    const {calcTotal} = useCartContext()

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="m-4 categoryt" to="/">SNEAKERS</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="m-4 category" to="category/deportivas">Deportivas</Link>
                        <Link className="m-4 category" to="category/moda">Moda</Link>
                        <Link className="m-4 category" to="category/accesorios">Accesorios</Link>
                    </Nav>
                    <Nav>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                        <p className="calculation">{calcTotal()}</p>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;