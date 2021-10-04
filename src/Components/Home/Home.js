import React, { useEffect, useState } from 'react';
import'./Home.css';
import img from '../../img/h1.png';
import img2 from '../../img/studying.svg';
import HomeService from '../HomeService/HomeService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [courses,setCourses]= useState([]);
    useEffect(() =>{
        fetch('./edudatahome.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
       

        <div className = "Home-container">
            <div className ="Hero-secton">
               <div className = "hero-content">
                  <h1 className="home-hero-h1"><span style={{color : "#FF284F"}}>ঘরে বসে</span> পড়াশোনার সহজ সমাধান
                  </h1>
                  <p className="home-hero-p">ক্লাস ১-১২, ভর্তি পরীক্ষা, বিশ্ববিদ্যালয় ও চাকরি জীবনের জন্য পাবে স্পেশাল কোর্স, মডেল টেস্টসহ ২৪/৭ দিকনির্দেশনা। <span style={{color : "#FF284F"}}>সিলেক্ট করো তোমার সেকশন, শুরু করো তোমার জার্নি। </span></p>
               </div>
               <div className = "hero-img">
               <img className = "img" src={img}  alt=''></img>
               </div>
            </div>

            <div className ="Service-container">
            <h1 className ="Service-h1"> স্কিল ডেভেলপমেন্ট</h1>
                <div className ="Service-section">
                    
                    {
                       courses.map(course => <HomeService 
                        key={course.key}
                        course={course}></HomeService>)
                    }
                </div>
            </div>


            <div className ="bottom-container">
               <div className ="bottom-content">
               <h2 className ="bottom-h2">শেখো <span style={{color : "#FF284F"}}>নিজের ইচ্ছেমতো!</span></h2>
                <p className ="bottom-p">ভিডিও, কুইজ, ইন্টারেক্টিভ বই সমৃদ্ধ একাডেমিক লাইব্রেরি,প্রফেশনাল এবং স্কিল ডেভেলপমেন্ট  <br/>কোর্সসমূহ পাবে সবসময়, সম্পূর্ণ বিনামূল্যে!</p>
                <button type="button" className="btn btn-outline-danger"> <FontAwesomeIcon icon ={faDownload}> </FontAwesomeIcon>    ডাউনলোড অ্যাপ</button>
               </div>
               <img className = "img2" src={img2}  alt=''></img>
            </div>
            
        </div>
    );
};

export default Home;