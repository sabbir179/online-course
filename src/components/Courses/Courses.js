import React, { useState } from 'react';
import './Courses.css'
import fakeData from '../..';
import CourseCard from '../CourseCard/CourseCard';
import Cart from '../Cart/Cart';


const Courses = () => {
    
    const firstFifteen = fakeData.slice(0, 15);
    const [course, setCourse] = useState(firstFifteen [0]);
    const [cart, setCart] = useState([]);
    console.log(course);
    const handleAddCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="course">
            <div className="course-container"> 

            {
                course.map(cdr => <CourseCard
                
                    handleAddCourse = {handleAddCourse}   course = {cdr}>
                        
                </CourseCard>)
                
            } 
        
            </div>
            <div className="cart-container" >
                <Cart cart = {cart} ></Cart>
            </div>
        </div>
        
    );
};

export default Courses;