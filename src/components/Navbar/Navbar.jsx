import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'


const NavBar = () => {
    return (
        <>
        <div className='navbar-top'>
            <Navbar>
                    <Navbar.Brand className='imagen-icon'>
                        <img
                        alt="logo"
                        src="https://initiate.alphacoders.com/images/116/cropped-512-512-1162610.jpg?2944"
                        width="40"
                        height="40"
                        className="d-inline-block"
                        />
                    </Navbar.Brand>
                        <Nav.Item className='titulo'>GameZone</Nav.Item>
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
                                                <FaRegUserCircle />
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
                                    <button className='dropdown-opener'>
                                        <div className='number'>0</div>
                                        <div className='icono'>
                                                <FaShoppingCart />
                                        </div>
                                        <div className='dropdown'>
                                            <div className='mini-cart-footer'>No hay elementos</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav.Item>
            </Navbar>
        </div>
        </>
    );
}

export default NavBar
