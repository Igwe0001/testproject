import React from "react";

const Form = () => {
  return (
    <section className="w-full grid place-items-center">
      <form
        action=""
        className="w-[40%]  mt-[100px] mb-[70px] max-w-[500px] bg-gray rounded-[30px] text-center"
      >
        <div>
          <h1 className="text-lightPurple font-bold text-3xl mt-8">
            Welcome to Famzers
          </h1>
          <p className="text-lightGray mt-4">
            Book Personalised video shoutouts from your favourite people
          </p>
        </div>
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col mt-6">
            <label
              htmlFor="text text-left"
              className="text-left my-2 text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="text"
              placeholder="James Doe"
              className="bg-gray border border-newGray px-4 py-4 rounded-md placeholder-placeHolder text-placeHolder"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="date" className="text-left my-2 text-white">
              Birthday
            </label>
            <input
              type="date"
              name="date"
              id=""
              className="bg-gray border border-newGray px-4 py-4 rounded-md placeholder-placeHolder text-placeHolder"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="email" className="text-left my-2 text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="James Doe"
              className="bg-gray border border-newGray px-4 py-4 rounded-md placeholder-placeHolder text-placeHolder"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="password" className="text-left my-2 text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="*********************"
              className="bg-gray border text-white border-newGray px-4 py-4 rounded-md placeholder-placeHolder "
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="text" className="text-left my-2 text-white">
              Invitation Code
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="GITFP59304K4"
              className="bg-gray border border-newGray px-4 py-4 rounded-md placeholder-placeHolder text-placeHolder"
            />
          </div>
          <button className="px-18 py-6 my-7 text-white text-xl rounded-lg bg-loginButton w-full">
            Create Account
          </button>

          <p className="text-xl text-purple">
            Already have an account? sign in
          </p>
          <div className="">
            <div className="flex w-[90%] mx-auto my-10 items-center">
              <label className="form-control text-lightGray text-md">
                <input type="checkbox" name="checkbox" className="bg-purple " />
                keep me up-to-date on latest cameo offers, updates and more! you
                can opt-out at anytime
              </label>

              {/* <p className="text-lightGray text-xl ">
                keep me up-to-date on latest cameo offers, updates and more! you
                can opt-out at anytime
              </p> */}
            </div>
            <p className="text-sm  text-lightGray mt-6 w-[90%] mb-16 mx-auto">
              by creating an account, you agree to famzers{" "}
              <span className="underline">terms of service,</span> including{" "}
              <span className="underline">additional terms</span> and{" "}
              <span className="underline">privacy policy</span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
