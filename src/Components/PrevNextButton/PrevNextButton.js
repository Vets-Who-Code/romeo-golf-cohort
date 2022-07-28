import React from "react";
import { useNavigate } from "react-router-dom"; 
import './PrevNextButton.css'
import RightArrow from "../../images/right-arrow.png";


function PrevNextButton() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          className="btn btn-gr"
          id="btn-blank"
          onClick={() => navigate(-1)}
        >
          Prev
        </button>
        <button
          className="btn btn-gr"
          id="btn-next"
          onClick={() => navigate(1)}
        >
          Next
          <img src={RightArrow} alt="" id="right-arrow" />
        </button>

        <div></div>
      </div>
    </>
  );
}

export default PrevNextButton;
