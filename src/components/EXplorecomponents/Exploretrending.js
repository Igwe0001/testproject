import React from "react";
import left from "../../assets/Lvector.svg";
import right from "../../assets/Rvector.svg";
import Explorelistcontent from "../../subcomponents/Explorelistcontent";

const Exploretrending = (props) => {
  return (
    <section className="w-full h-[450px] mx-auto mt-5">
      <header className="w-full flex h-[50px] mb-4 justify-between items-center">
        <h2 className="text-white text-2xl font-bold">{props.title}</h2>
        <div className="flex">
          <button>
            <img src={left} alt="left" className="mx-1 w-7" />
          </button>
          <button>
            <img src={right} alt="right" className="mx-1 w-7" />
          </button>
        </div>
      </header>
      <Explorelistcontent />
    </section>
  );
};

export default Exploretrending;
