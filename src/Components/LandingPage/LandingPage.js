import React from "react";
import '../LandingPage/LandingPage.css';
import RightArrow from '../../images/right-arrow.png';
import { useNavigate } from "react-router-dom"; 



export default function LandingPage() {
  const navigate = useNavigate()
  return (
  
    <>
      <div className="container">
        <div className="landing-text">
          <h1 id="page-title"><span>#VetsWhoCode</span> Resume Builder</h1>
          {/* <h3>Create a Winning Resume</h3> */}
          <p>
             Our
            resume builder is easy to use with a range of functions tailored to meet
            the needs of U.S. military personnel transitioning out of the military
            and veterans.
          </p>
  
          <p>Custom-tailor resumes for any job within minutes! Build an easily custimizable and simple resume in a few clicks!</p>
          <div className="landing-btn">
            <a href="../PersonalInfo/" >
            <button className="btn btn-gr" onClick={()=> navigate(1)}>Get Started 
            <img src={RightArrow} alt="" id="right-arrow" />
            </button>
           
                    </a>
          </div>
        </div>
        <div className="landing-image">
          <img src="https://media.istockphoto.com/vectors/human-resources-management-concept-vector-id849410148?k=20&m=849410148&s=612x612&w=0&h=fipoIc30-fwyXh7oWMttTEOH3zAi6a-ONU4p8ca_XL4=" alt="" />
        </div>
      </div>
      </>

  );
}
