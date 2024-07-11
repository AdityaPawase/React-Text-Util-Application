import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const doUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const doLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const doClear = () => {
    setText("");
  };
  const doHandle = (e) => {
    setText(e.target.value);
  };

  const doCopy = () => {
    let myText = document.querySelector(".area");
    myText.select();
    navigator.clipboard.writeText(myText.value);
  };

  return (
    <div className="container">
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control area"
            id="exampleFormControlTextarea1"
            rows="15"
            value={text}
            onChange={doHandle}
          ></textarea>
        </div>

        <button type="button" onClick={doUpperCase} class="btn btn-primary">
          Change To Uppercase
        </button>
        <button
          type="button"
          onClick={doLowerCase}
          class="btn btn-warning secondbtn"
        >
          Change To Lowercase
        </button>
        <button type="button" onClick={doClear} class="btn btn-success third">
          Clear Text
        </button>
        <button type="button" onClick={doCopy} class="btn btn-danger fourth">
          Copy Text
        </button>

        <div className="container my-3">
          <h2>Your Text Summary </h2>
          <p>
            {" "}
            Total Words : {text.split(" ").length - 1} Total Charachters :{" "}
            {text.length}
          </p>
          <p>{0.08 * text.split(" ").length} Minutes Time To Read</p>
        </div>
      </div>
    </div>
  );
}
