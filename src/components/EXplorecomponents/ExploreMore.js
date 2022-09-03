import React from "react";
import Exploreallcomdey from "./Exploreallcomdey";
import Exploretrending from "./Exploretrending";


const ExploreMore = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full flex justify-end mt-2">
        <div>
          <button className="py-1 px-4 mx-2 text-palePurple bg-darkPurple rounded-lg">
            Clear Filter
          </button>
          <button className="py-1 px-4 mx-2 text-palePurple bg-darkPurple rounded-lg">
            Hide Filter
          </button>
        </div>
      </div>
      <header className="flex h-[80px] justify-between items-center">
        <h2 className="text-white text-2xl font-bold">Featured</h2>
        <nav className="flex items-center">
          <ul className="flex">
            <li className="text-white align-center mx-6 px-2 py-1 text-base 2xl:text-2xl border border-purple rounded-2xl">
              Stand Up
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Instagram Comedians
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Skit Makers
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Music Commedians
            </li>
            <li className="text-white align-center mx-6 text-base 2xl:text-2xl">
              Reality TV
            </li>
          </ul>
        </nav>
      </header>
      <Exploretrending title="Explore more" />
      <Exploretrending title="New to comedy" />
          <Exploreallcomdey />
       
    </div>
  );
};

export default ExploreMore;
