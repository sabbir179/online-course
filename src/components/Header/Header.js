import React from 'react';
import Baner from '../assets/image/baner.jpg'
import './Header.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
const Header = () => {
    return (
        

        <div className="header">
             
            <Container fluid="md">
                <Row>
                    <Col className="text" md={3} >
                    
                        <h1>Weclcome <br/> to <br/> <span>online course</span> </h1>
                    
                    </Col>

                    <Col md={48}>
                    
                        <img src= {Baner} alt=""/>
                      
                    </Col>

                    
                </Row>
            </Container>
             
            

        </div>
    );
};

export default Header;