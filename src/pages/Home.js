import React from "react";
import bgMobileHome from "../img/home/background-home-mobile.jpg";
import bgTabletHome from "../img/home/background-home-tablet.jpg";
import bgDesktopHome from "../img/home/background-home-desktop.jpg";

function Home() {
  return (
    <section
      className={`min-h-screen w-screen pt-20 flex flex-col justify-center items-center text-third lg:flex-row lg:justify-start lg:items-center `}
    >
      <img
        src={bgMobileHome}
        alt="bg"
        className="absolute top-0 bottom-0 w-full -z-10 h-full bg-cover block md:hidden"
      />
      <img
        src={bgTabletHome}
        alt="bg"
        className="absolute top-0 bottom-0 w-full -z-10 h-full bg-cover hidden md:block"
      />
      <img
        src={bgDesktopHome}
        alt="bg"
        className="absolute top-0 bottom-0 w-full -z-10 h-full bg-cover hidden lg:block"
      />
      <div className="flex flex-col justify-center items-center lg:w-1/2 lg:pl-32">
        <h1 className="uppercase text-secondary text-sm md:text-[20px] lg:self-start">
          So, you want to travel to
        </h1>
        <h1 className="uppercase font-bellefair text-[80px] md:text-xxxl lg:self-start">
          space
        </h1>
        <p className="text-secondary text-[15px] text-center px-5 leading-6 md:text-sm md:px-52 md:leading-8 lg:px-0 lg:pr-20 lg:self-start  lg:text-justify">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/2 lg:mt-32">
        <div className="rounded-full bg-third w-40 h-40 flex justify-center items-center mt-11 md:w-[242px] md:h-[242px] lg:mt-0 lg:w-[274px] lg:h-[274px]">
          <a
            href="/destination"
            className="uppercase text-primary font-bellefair text-[20px] lg:text-lg"
          >
            explore
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
