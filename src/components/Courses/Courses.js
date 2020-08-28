import React, { useState } from 'react';

import './Courses.css'
import fakeData from '../..';
import CourseCard from '../CourseCard/CourseCard';
import Cart from '../Cart/Cart';


const Courses = () => {
    // console.log(fakeData);
    const firstFifteen = fakeData.slice(0, 15);
    const [course, setCourse] = useState(firstFifteen);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="course">
            <div className="course-container"> 
            
            {
                course.map(cd => <CourseCard
                
                    handleAddCourse = {handleAddCourse}
                    course = {cd}
                >

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