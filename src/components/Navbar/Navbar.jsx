import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


import './Navbar.css'
import { useCartContext } from '../../contexts/CartContext';


const NavBar = () => {
    const { cantidadTotal } = useCartContext()
    return (
        <>
        <div className='navbar-top'>
            <Navbar>
                    <Container>
                    <Navbar.Brand>
                    <div className='imagen-icon'>
                        <ion-icon name="game-controller-outline"></ion-icon>
                    </div>
                    </Navbar.Brand>
                        <Navbar.Brand className='titulo' href="/"><span className='title-home'>GameZone</span></Navbar.Brand>
                    <Form className="barra-busqueda">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                            />
                        <Button variant="outline-success">🔍︎</Button>
                    </Form>
                <Nav.Item>
                    <div id="redes">
                        <div className="redes-items">
                            <div className="labels-redes">
                                <div className="item">
                                    <Nav.Link href="https://www.whatsapp.com/?lang=es" target="_blank" >
                                        <img alt="" src="https://www.fullh4rd.com.ar/img/icn-nav-whatsapp.png"/>
                                    </Nav.Link>
                                </div>
                                <div className="item">
                                    <Nav.Link href="https://twitter.com/home" target="_blank">
                                        <img alt="" src="https://www.fullh4rd.com.ar/img/icn-nav-twitter.png"/>
                                    </Nav.Link>
                                </div>
                                <div className="item">
                                    <Nav.Link href="https://www.facebook.com/" target="_blank">
                                        <img alt="" src="https://www.fullh4rd.com.ar/img/icn-nav-facebook.png"/>
                                    </Nav.Link>
                                </div>
                                <div className="item">
                                    <Nav.Link href="https://www.instagram.com/" target="_blank">
                                        <img alt="" src="https://www.fullh4rd.com.ar/img/icn-nav-instagram.png"/>
                                    </Nav.Link>
                                </div>
                                <div className="item">
                                    <Nav.Link href="https://www.youtube.com/" target="_blank">
                                        <img alt="" src="https://www.fullh4rd.com.ar/img/icn-nav-youtube.png"/>
                                    </Nav.Link>
                                </div>
                                <div className='btn-sep'>
                                    <img src="https://www.fullh4rd.com.ar/img/icn-nav-separador.png" alt="" />
                                </div>
                                <div className='item-user'>
                                    <button className='dropdown-opener'>
                                            <div className='icono'>
                                                <ion-icon name="person-circle-outline"></ion-icon>
                                            </div>
                                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                            </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                                Separated link
                                            </NavDropdown.Item>
                                            </NavDropdown>                            
                                    </button>
                                </div>
                                <div className='item-cart' id='minicart'>
                                    <Link to= '/cart'>
                                    <button className='dropdown-opener'>
                                        <div className='number'> { cantidadTotal() } </div>
                                        <div className='icono'>
                                            <ion-icon name="cart-outline"></ion-icon>
                                        </div>
                                        <div className='dropdown'>
                                            <div className='mini-cart-footer'></div>
                                        </div>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav.Item>
                            </Container>
            </Navbar>
        </div>
        </>
    );
}

export default NavBar
