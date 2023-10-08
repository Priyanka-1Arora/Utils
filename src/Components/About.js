import React,{useState} from "react";

export default function About() {
    const [btnText,setBtnText]=useState('Enable Dark Mode');
    const [btnStyle,setBtnStyle]=useState({
        backgroundColor:'white',
        color:'black'
    })
    const change=()=>{
        if(btnStyle.backgroundColor==='white'){
            setBtnStyle({
                backgroundColor:'black',
                color:'white'
            })
            setBtnText('Disable Dark Mode')
        }
        else{
            setBtnStyle({
                backgroundColor:'white',
                color:'black'
            })
            setBtnText('Enable Dark Mode')
        }
    }
  return (
    <>
      <div className="container">
        <h1>ABOUT US</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={btnStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Click Here to view
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={btnStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <button className="btn btn-primary my-3" onClick={change}>{btnText}</button>
        </div>
      </div>
    </>
  );
}
