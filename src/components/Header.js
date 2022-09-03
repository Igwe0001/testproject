import React from "react";
import Logo from "../assets/Logo.svg";
import LogButton from "../UI/LogButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 2xl:h-40 flex px-[5%] items-center justify-between ">
      <div className="w-[150rem] flex items-center justify-between max-w-[1550px] mx-auto">
        <nav className="flex">
          <Link to="/Home">
            <img src={Logo} alt="logo" className="w-[104px] 2xl:w-[208px]" />
          </Link>
          <ul className="flex mx-6 ">
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <Link to="/Explore">
                <button>Categories</button>
              </Link>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button>Events</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button>For Business</button>
            </li>
            <li className="flex align-center mx-6 text-base 2xl:text-2xl text-white">
              <button>How it work</button>
            </li>
          </ul>
        </nav>
        <LogButton className="py-2.5 px-[22px]  text-sm 2xl:text-xl font-semibold bg-loginButton text-white">
          <Link to="/Form">Login</Link>
        </LogButton>
      </div>
    </header>
  );
};

export default Header;
