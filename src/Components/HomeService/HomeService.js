import React from 'react';
import'./HomeService.css';

const HomeService = (props) => {
    const{name,img,price} = props.course;
    return (
<div>
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Course Name: {name}</h5>
       
        <p className="card-text">Course Price: {price}</p>
      </div>
    </div>
  </div>
  
  
  
</div>

        </div>
    );
};

export default HomeService;