import React from "react";
import Options from "../formcomponents/Options";
import Radio from "../formcomponents/Radio";
import ExploreMore from "../components/EXplorecomponents/ExploreMore";


const Explore = () => {
  return (
    <div className=" max-w-[1500px] w-[90%] mx-auto flex">
      <div className="w-[250px] h-[100%] mr-[50px]">
        <h1 className="text-white font-bold mt-4 mb-10">Home / Comedians</h1>
        <form action="">
          <Options span="Sort by">
            <Radio
              className="radio-item"
              label="Recommended"
              name="sort"
              htmlFor="recommended"
              id="recommended"
            />
            <Radio
              className="radio-item"
              label="Price: High - Low"
              name="sort"
              htmlFor="price"
              id="price"
            />
            <Radio
              className="radio-item"
              label="Number of reviews"
              name="sort"
              htmlFor="reviews"
              id="reviews"
            />
            <Radio
              className="radio-item"
              label="Newest"
              name="sort"
              htmlFor="newest"
              id="newest"
            />
            <Radio
              className="radio-item"
              label="Alphabetical"
              name="sort"
              htmlFor="alphabetical"
              id="alphabetical"
            />
          </Options>
          <Options span="24hr delivery">
            <Radio
              className="radio-item"
              label="24hr delivery"
              name="delivery"
              htmlFor="delivery"
              id="delivery"
            />
          </Options>
          <Options span="Price">
            <Radio
              className="radio-item"
              label={`${"\u20A6"}0 - ${"\u20A6"}100`}
              name="amount"
              htmlFor="amount1"
              id="amount1"
            />
            <Radio
              className="radio-item"
              label={`${"\u20A6"}100 - ${"\u20A6"}200`}
              name="amount"
              htmlFor="amount2"
              id="amount2"
            />
            <Radio
              className="radio-item"
              label={`${"\u20A6"}200 - ${"\u20A6"}300`}
              name="amount"
              htmlFor="amount3"
              id="amount3"
            />
            <Radio
              className="radio-item"
              label={`${"\u20A6"}300 - ${"\u20A6"}400`}
              name="amount"
              htmlFor="amount4"
              id="amount4"
            />
            <Radio
              className="radio-item"
              label={`${"\u20A6"}500+`}
              name="amount"
              htmlFor="amount5"
              id="amount5"
            />
          </Options>
          <div>
            <div className="my-10 flex items-center">
              <div className="w-[20px] h-[20px] text-darkGray border rounded-full"></div>
              <div className="w-[100px] h-[1px] bg-darkGray"></div>
              <div className="w-[20px] h-[20px] text-darkGray border rounded-full"></div>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder={`${"\u20A6"}0`}
                className="w-12 px-2 placeholder:text-white rounded-md bg-transparent text-white  border"
              />
              <span className="block text-white mx-3">to</span>
              <input
                type="text"
                name=""
                id=""
                placeholder={`${"\u20A6"}0`}
                className="w-12 px-2 placeholder:text-white rounded-md bg-transparent text-white  border"
              />
            </div>
          </div>
          <Options span="Average Review Rating">
            <Radio
              className="second-radio-item"
              label="4 stars and above"
              name="rating"
              htmlFor="rating1"
              id="rating1"
            />
            <Radio
              className="second-radio-item"
              label="3 stars and above"
              name="rating"
              htmlFor="rating2"
              id="rating2"
            />
            <Radio
              className="second-radio-item"
              label="2 stars and above"
              name="rating"
              htmlFor="rating3"
              id="rating3"
            />
            <Radio
              className="second-radio-item"
              label="1 stars and above"
              name="rating"
              htmlFor="rating4"
              id="rating4"
            />
          </Options>
        </form>
      </div>
      <ExploreMore />
    </div>
  );
};

export default Explore;
