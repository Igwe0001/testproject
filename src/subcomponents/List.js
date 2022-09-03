import React from "react";

const List = (props) => {
  return (
    <li className="w-[220px] h-[400px] mx-auto ">
      <div className="w-full h-[75%] mx-auto overflow-hidden rounded-[20px]">
        <img
          src={props.src}
          alt=""
          className="rounded-[20px] w-full h-full transform transition duration-500 hover:scale-110"
        />
      </div>
      <div className="mt-3">
        <h1 className="text-white  font-bold">{props.h1}</h1>
        <p className="text-white">{props.p}</p>
        <div className="my-2">
          <span className="font-bold text-white">{props.span}</span>
          <button className="px-1 text-sm py-1 text-white rounded-lg mx-4 bg-loginButton">
            live video call
          </button>
        </div>
      </div>
    </li>
  );
};

export default List;
