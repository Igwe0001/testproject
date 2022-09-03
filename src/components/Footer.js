import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] bg-black grid place-items-center ">
      <div className="min-w-[520px] grid place-items-center">
        <h1 className="text-ash text-xl text-center font-bold">
          Join Our Mailing List
        </h1>
        <p className="text-ash text-center text-[14px] w-[92%] mx-auto">
          Be The First To Know About The Newest Stars And The Best Deals On
          Famzers
        </p>
        <form action="" className="mx-auto my-8 flex w-[80%]">
          <input
            type="email"
            name=""
            id=""
            className="w-[78%] mx-auto mr-[20px] py-2 text-white bg-black border placeholder-darkAsh border-darkAsh px-[22px] rounded-lg"
            placeholder="Email Address"
          />
          <button className="text-white py-2.5 px-[22px] rounded-lg text-sm 2xl:text-xl font-semibold bg-loginButton">
            Join Us
          </button>
        </form>
        <nav className="flex mt-14">
          <ul className="flex mx-6 ">
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">Jobs</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">FAQ</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">Privacy</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">Terms</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">Guidlines</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">About</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">Team</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button className="font-bold">Accessibility</button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
