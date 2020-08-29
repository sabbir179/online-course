import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'
import './CourseCard.css'

const CourseCard = (props) => {
    const {img, courseName, price }  = props.course;
    
    return (
        <div className="course-card  ">
            
            <Card border="info"  style={{ width: '18rem' }} className="box  ">
                <Card.Img variant="top" src= {img} />
                <Card.Body>
                    <Card.Title>  {courseName}</Card.Title>
                    <Card.Text>
                       Price: $ {price}
                    </Card.Text>
                    <Button className="main-button"
                    onClick= {() => props.handleAddCourse(props.course) }
                    variant="primary">Enroll now</Button>
                </Card.Body>
                </Card>
        </div>
    );
    
};

export default CourseCard;