import React from "react";

const Radio = (props) => {
  return (
    <div className={props.className}>
      <input type="radio" name={props.name} id={props.id} />
      <label htmlFor={props.htmlFor} className=" text-white font-bold ">
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
