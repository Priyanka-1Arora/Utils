import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  const chng=(event)=>{
    props.background(event.target.value)
  }
  const hndlClr=(event)=>{
    props.background(event.target.value);
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
            <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/"> */}
                {/* in place of above line write this for router to work in place of a use link and
                in place of href use to*/}
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  {props.about}
                </Link> */}
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
            <label htmlFor="exampleColorInput" className="form-label">Color picker</label>
            <input onChange={chng} onClick={hndlClr} type="color" className="form-control form-control-color" id="exampleColorInput" value="#000000" title="Choose your color"></input>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.text}
              </label>
            </div>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
            {/* style={{backgroundColor:props.mode}} */}
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

// Navbar.defaultProps={
//   title:'Set Tile',
//   about:'Set About'
// }
