import React from "react";
import ayo from "../assets/ayo.svg";

const Allcomedy = () => {
  // const classes = " w-full rounded-[20px] " + props.className;
  return (
    <li className="w-[200px] mx-2">
      <div className="overflow-hidden rounded-[20px]">
        <img
          src={ayo}
          alt="ayo"
          className=" w-full rounded-[20px] h-full transform transition duration-500 hover:scale-110"
        />
      </div>
      <h1 className="text-white mt-3 font-bold">{props.h1}</h1>
      <p className="text-white">{props.p}</p>
      <div className="my-2 w-full flex">
        <span className="font-bold text-white">{props.span}</span>
        <button className=" text-white text-[12px] py-1 px-1 rounded-lg mx-4 bg-loginButton">
          live video call
        </button>
      </div>
    </li>
  );
};

export default Allcomedy;
