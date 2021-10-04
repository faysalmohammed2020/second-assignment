import React from 'react';
import'./About.css';
import img from '../../img/h3.png';
import img2 from '../../img/h1.png';
const About = () => {
    return (
        <div>
           <div className ="Hero-section">
               <div className = "about-hero-content">
                  <h1 className="hero-h1">Who We Are?
                  </h1>
                  <p className="hero-p">Know About Us Before Join Our Courses<br/> Start Your Journey With Us. </p>
               </div>
               <div className = "hero-img">
               <img className = "img" src={img}  alt=''></img>
               </div>
               </div>
              <div className = "about-section">

                  <div className="about-content">
                  <h1 className ="about-h1">About us</h1>
                <p>We are the online Education Institution.We have more than 100+ tutors for teaching our students.You can 
                    easily develop your skill from our courses.You also get<br/> 24/7 support from us.</p>
                  </div>
                  <div className="about-img">
             <img className = "img" src={img2}  alt=''></img>
             </div>
             
             </div>
            
        </div>
    );
};

export default About;