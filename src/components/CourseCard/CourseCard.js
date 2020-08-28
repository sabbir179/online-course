import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'
const CourseCard = (props) => {
    const {img, courseName, price } = props.course;
    console.log(props);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {img} />
                <Card.Body>
                    <Card.Title> Course Name: {courseName}</Card.Title>
                    <Card.Text>
                        Price: $ {price}
                    </Card.Text>
                    <Button variant="primary">Enroll now</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default CourseCard;