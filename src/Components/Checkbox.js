import React from "react";

export default function Checkbox(props) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id={props.ele.id}
          value="option1"
          onClick={() => {
            localStorage.setItem("id", props.ele.id);
          }}
        />
        <label className="form-check-label" htmlFor={props.ele.id}>
          {props.ele.name} , {props.ele.price}
        </label>
      </div>
    </>
  );
}
