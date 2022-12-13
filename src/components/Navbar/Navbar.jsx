import { Link, NavLink } from 'react-router-dom'
import carrito from '../../assets/react.svg'
import { Container, Nav, Navbar} from 'react-bootstrap'

import './Navbar.css'


const NavBar = () => {
    // console.log('Rendering Navbar')
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-danger' : 'btn btn-danger border-0'} to='/node_modules'>GameZone</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <NavLink 
                    className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success border-0'} 
                    to="/categoria/Hardware"
                >
                    Hardware
                </NavLink>
                <NavLink 
                    className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success border-0'} 
                    to="/categoria/Motherboards"
                >
                    Motherboards
                </NavLink>
                <NavLink 
                    className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success border-0'} 
                    to="/categoria/Periféricos"
                >
                    Periféricos
                </NavLink>
                <NavLink 
                    className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success border-0'} 
                    to="/categoria/Monitores"
                >
                    Monitores
                </NavLink>
                <NavLink 
                    className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success border-0'} 
                    to="/categoria/Sillas"
                >
                    Sillas
                </NavLink>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
                <img src={carrito} alt="imagen" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
}

export default NavBar
