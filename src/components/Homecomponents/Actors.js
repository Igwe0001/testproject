import React from "react";
import left from "../../assets/Lvector.svg";
import right from "../../assets/Rvector.svg";
import LogButton from "../../UI/LogButton";
import Listcontent from "../Listcontent";


const Actors = () => {
  return (
    <section className="w-full max-w-[1750px] mx-auto px-[5%]">
      <header className="flex h-[100px] mt-10 justify-between items-center">
        <h2 className="text-white text-4xl font-bold">Actors</h2>
        <div className="flex">
          <div className="flex">
            <img src={left} alt="left" className="mx-1" />
            <img src={right} alt="right" className="mx-1" />
          </div>
          <LogButton className="py-2.5 px-[22px] ml-10  text-sm 2xl:text-xl font-semibold bg-loginButton text-white">
            View All
          </LogButton>
        </div>
      </header>
      <Listcontent />
    </section>
  );
};

export default Actors;
