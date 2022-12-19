import {  Nav} from 'react-bootstrap'

import './nav2.css'

function Navbar3() {
    return (
       <div id='iconbar'>
            <div className='pestañas'>
                <div className='icons'>
                    <div className='item-item'>
                        <Nav.Item>
                            <Nav.Link href="/categoria/Hardware">
                            <div className='section'>Hardware</div>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>
                        <Nav.Item>
                            <Nav.Link href="/categoria/Motherboards">
                            <div className='section'>Motherboards</div>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>    
                        <Nav.Item>
                            <Nav.Link href="/categoria/Periféricos">
                            <div className='section'>Periféricos</div>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>   
                        <Nav.Item>
                            <Nav.Link href="/categoria/Monitores">
                            <div className='section'>Monitores</div>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className='item-item'>                        
                        <Nav.Item>
                            <Nav.Link href="/categoria/Sillas">
                            <div className='section'>Sillas</div>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar3;