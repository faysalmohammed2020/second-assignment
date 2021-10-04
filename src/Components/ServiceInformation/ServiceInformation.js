import React from 'react';
import'./ServiceInformation.css';

const ServiceInformation = (props) => {
    const{name,img,price} = props.course;
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
  <div classNames="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Course Name: {name}</h5>
       
        <p className="card-text">Course Price: {price}</p>
        <button type="button" className="btn btn-outline-primary"> Join Now</button>

      </div>
    </div>
  </div>
  
  
  
</div>
        </div>
    );
};

export default ServiceInformation;