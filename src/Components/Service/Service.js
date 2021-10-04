import React, { useEffect, useState } from 'react';
import img from '../../img/h2.png';
import ServiceInformation from '../ServiceInformation/ServiceInformation';
import'./Service.css';
const Service = () => {
    const [courses,setCourses]= useState([]);
    useEffect(() =>{
        fetch('./educoursesdata.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div className ="Service-container">
          <div className ="Hero-secton">
               <div className = "hero-content">
                  <h1 className="hero-h1"><span style={{color : "#FF284F"}}>Develop</span> Your Skill Wih Us
                  </h1>
                  <p className="hero-p">Join in our Online Courses And Develop Your Skill<br/> <span style={{color : "#FF284F"}}>Start Your Journey With Us. </span></p>
               </div>
               <div className = "hero-img">
               <img className = "img" src={img}  alt=''></img>
               </div>
            </div>
            <div className ="Course-container">
            <h1 className ="course-h1"> Our Courses</h1>
            <div className ="course-section">
                    
                    {
                       courses.map(course => <ServiceInformation 
                        key={course.key}
                        course ={course}></ServiceInformation>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;