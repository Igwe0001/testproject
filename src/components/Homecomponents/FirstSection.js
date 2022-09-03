import React from "react";
import dora from "../../assets/dora.svg";
import falz from "../../assets/falz.svg";
import laycon from "../../assets/laycon.svg";
import ellipse from "../../assets/Ellipse-4.svg";

const FirstSection = () => {
  return (
    <section className="w-full px-[5%] h-[1100px]">
      <div className="box bg-box shadow-3xl grid place-items-center w-full h-[80%]">
        <div className="absolute left-[5%] top-[5%] w-[250px] h-[400px] mx-auto">
          <div className="relative w-full h-full">
            <div className="w-[80%] h-full mx-auto">
              <img
                src={dora}
                alt="dora"
                className="rounded-full absolute left-0"
              />
              <div className="base bg-darkGreen"></div>
            </div>
          </div>
        </div>
        <div className="absolute right-[10%] top-[-5%] ">
          <div className="relative w-full h-full">
            <div className="w-[80%] h-full mx-auto">
              <img src={falz} alt="falz" className="rounded-[70px] " />
              <div className="second-base bg-green"></div>
            </div>
          </div>
        </div>
        <div className="invert w-[50%] text-center">
          <h1 className="text-4xl 2xl:text-4xl font-bold px-14">
            Personalised videos from your favourite stars
          </h1>
          <div className="mt-[-2rem]">
            <span className="text-6xl tracking-widest font-bold">___</span>
          </div>
          <p className="text-sm 2xl:text-xl mt-6 px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nemo iusto sit eaque quibusdam voluptatibus odio quod excepturi
            fugiat? Fugiat commodi hic nam, mollitia eius quisquam error eveniet
            quidem corrupti.
          </p>
        </div>
        <img
          src={laycon}
          alt="laycon"
          className="rounded-[70px] absolute left-[5%] bottom-[-10%]"
        />
        <img
          src={ellipse}
          alt="ellipse"
          className="w-[70px] absolute bottom-[20%] right-[45%]"
        />
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute bottom-[-10%] right-[15%]"
        />
      </div>
    </section>
  );
};
// <img src={falz} alt="falz" className="rounded-[70px] " />;

export default FirstSection;
