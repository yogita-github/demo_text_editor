import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",

  });
  const [btntext,setBtnText] = useState("Enable Dark Mode")
  const toggleStyle = ()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border: "2px solid white"
        })
        setBtnText("Enable Light mode")
    }

    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode");
    }
  }

  return (
    <div classNameName="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Use
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Easy to use</strong> You can easily convert any sentence in Upper case ,Lower case and also carry out different operations.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              No time Contraint
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>You can use it anytime</strong> Regardless of time contriant this app can be used any time . <code></code>
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Easy to Use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>It has user friendly interface</strong> It can be used by anybody who is not technosavy.<code></code>
              
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleStyle}
        type="button"
        class="btn btn-secondary my-4 mx-2"
      >
        {btntext}
      </button>
    </div>
  );
}
