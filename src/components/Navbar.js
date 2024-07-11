import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const doDark = () => {
    if (myStyle.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#013221";
      setBtnMode("Light Mode");
      setAl("Dark Mode is On");
      let myAlert = document.querySelector(".myAlert");
      setTimeout(() => {
        myAlert.style.display = "none";
      }, 2000);
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setBtnMode("Dark Mode");
      setAl("Light Mode is On");
      let myAlert = document.querySelector(".myAlert");
      setTimeout(() => {
        myAlert.style.display = "none";
      }, 2000);
    }
  };
  const [btnMode, setBtnMode] = useState("Dark Mode");

  const [al, setAl] = useState("Light mode");

  return (
    <>
      <div style={myStyle}>
        <nav className="navbar bg-body-tertiary mynav">
          <div className="container-fluid">
            <a className="navbar-brand">{props.title}</a>

            <div className="container dark">
              <button type="button" onClick={doDark} class="btn btn-primary">
                {btnMode}
              </button>
            </div>
            <Link className="navbar-brand home" to="/">
              Home
            </Link>
            <Link className="navbar-brand about" to="/about">
              AboutMe
            </Link>
          </div>
        </nav>
      </div>
      <div class="alert alert-success myAlert" role="alert">
        <strong>{al}</strong>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
};
