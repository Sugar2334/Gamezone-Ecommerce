import {  Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './nav2.css'

function Navbar3() {
    return (
       <div id='iconbar'>
            <div className='pestañas'>
                <div className='icons'>
                    <div className='item-item'>
                        <Nav.Item>
                            <Link to="/categoria/Hardware">
                            <div className='section'>Hardware</div>
                            </Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>
                        <Nav.Item>
                            <Link to="/categoria/Motherboards">
                            <div className='section'>Motherboards</div>
                            </Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>    
                        <Nav.Item>
                            <Link to="/categoria/Periféricos">
                            <div className='section'>Periféricos</div>
                            </Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>   
                        <Nav.Item>
                            <Link to="/categoria/Monitores">
                            <div className='section'>Monitores</div>
                            </Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>                        
                        <Nav.Item>
                            <Link to="/categoria/Sillas">
                            <div className='section'>Sillas</div>
                            </Link>
                        </Nav.Item>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;