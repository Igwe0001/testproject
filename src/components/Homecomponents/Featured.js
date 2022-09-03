import React from "react";
import LogButton from "../../UI/LogButton";
import Listcontent from "../Listcontent";

const Featured = () => {
  return (
    <section className="w-full max-w-[1750px] mx-auto px-[5%]">
      <header className="flex h-[100px] justify-between items-center">
        <h2 className="text-white text-4xl font-bold">Featured</h2>
        <nav className="flex items-center">
          <ul className="flex">
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Actors
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Tiktok influencers
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Musicians
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Athletes
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Commedians
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Reality TV
            </li>
          </ul>
          <LogButton className="py-2.5 px-[22px]  text-sm 2xl:text-xl font-semibold bg-loginButton text-white">
            View All
          </LogButton>
        </nav>
      </header>
      <Listcontent />
    </section>
  );
};

export default Featured;
