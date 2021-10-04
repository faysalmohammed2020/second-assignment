import React from 'react';
import img from '../../img/h4.png';
import'./Contact.css';

const Contact = () => {
    return (
        <div className ="Contact-container">
             <div className ="Hero-section">
               <div className = "about-hero-content">
               <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <label for="exampleFormControlInput1" class="form-label">Name: </label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-outline-light">Send Message</button>


               </div>
               <div className = "contact-img-container">
               <img className = "contact-img" src={img}  alt=''></img>
               </div>
               </div>
    </div>
    );
};

export default Contact;