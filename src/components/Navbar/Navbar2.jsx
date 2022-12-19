import React from "react";
import Nav from 'react-bootstrap/Nav';

import './nav2.css'

function Navbar2() {
  return (
    <div className="topbar">
        <div className="cont">
            <div className="top-items">
                <div className="labels">
                    <div className="item">
                        <Nav.Link href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank">
                        <img alt="" src="https://www.fullh4rd.com.ar/img/nav_intel.png"/>
                        </Nav.Link>
                    </div>
                    <div className="item">
                        <Nav.Link href="https://www.logitechstore.com.ar/" target="_blank">                        
                        <img alt="" src="https://www.fullh4rd.com.ar/img/nav_logitech.png"/>
                        </Nav.Link>
                    </div>
                    <div className="item">
                        <Nav.Link href="https://www.corsair.com/us/es/" target="_blank">          
                        <img alt="" src="https://www.fullh4rd.com.ar/img/nav_corsair.png"/>
                        </Nav.Link>
                    </div>
                    <div className="item">
                        <Nav.Link href="https://www.nvidia.com/es-ar/geforce-now/" target="_blank">                       
                        <img alt="" src="https://www.fullh4rd.com.ar/img/nav_geforce.png"/>
                        </Nav.Link>
                    </div>
                    <div className="item">
                        <Nav.Link href="https://www.amd.com/es" target="_blank">                     
                        <img alt="" src="https://www.fullh4rd.com.ar/img/nav_amd.png"/>
                        </Nav.Link>
                    </div>
                    <div className="item">
                        <Nav.Link href="https://www.trust.com/es" target="_blank">                     
                        <img alt="" src="https://www.fullh4rd.com.ar/img/nav_trust.png"/>
                        </Nav.Link>
                    </div>
                </div>
                <div class="nav-text">
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                             ✆ (011) 34566878 /  ventas@gamezone.com.ar  /  contacto     
                        </Nav.Link>
                    </Nav.Item>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar2;