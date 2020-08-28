import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Courses.css'
import {Card, Button} from 'react-bootstrap'

const Courses = () => {
    return (
        <div className="course">
            <div className="course-container"> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Price: $ 40
                    </Card.Text>
                    <Button variant="primary">Enroll now</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="cart-container" >this is cart container</div>
        </div>
        
    );
};

export default Courses;