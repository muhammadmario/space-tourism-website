import React, { useState, useEffect } from "react";
import bgMobileTech from "../img/technology/background-technology-mobile.jpg";
import bgTabletTech from "../img/technology/background-technology-tablet.jpg";
import bgDesktopTech from "../img/technology/background-technology-desktop.jpg";
import capsuleLandscape from "../img/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../img/technology/image-space-capsule-portrait.jpg";
import vehiclePortrait from "../img/technology/image-launch-vehicle-portrait.jpg";
import vehicleLandscape from "../img/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../img/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../img/technology/image-spaceport-portrait.jpg";
import axios from "../api/axios";

function Technology() {
  const [technologys, setTechnologys] = useState();
  const [techId, setTechId] = useState(0);
  const fetchTech = async () => {
    try {
      const response = await axios.get("/technology");
      console.log(response.data);
      setTechnologys(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTech();
  }, []);

  return (
    <section
      className={`min-h-screen relative w-full pt-20 flex flex-col items-center text-third lg:justify-start lg:items-start`}
    >
      {/* background */}
      <img
        src={bgMobileTech}
        alt="bg"
        className="absolute top-0  w-full -z-10 h-full bg-cover  block md:hidden"
      />
      <img
        src={bgTabletTech}
        alt="bg"
        className="absolute top-0  w-full -z-10 h-full bg-cover hidden md:block"
      />
      <img
        src={bgDesktopTech}
        alt="bg"
        className="absolute top-0  w-full -z-10 h-full bg-cover hidden lg:block"
      />
      {/* background */}

      <h1 className="uppercase text-third text-sm text-center md:text-[24px] md:text-start  lg:text-base md:pt-[40px] lg:pt-[70px] lg:pl-[165px]">
        <span className="font-bold mr-2 text-secondary opacity-75">03</span>
        Space Launch 101
      </h1>

      <div className=" lg:flex lg:justify-center lg:items-center">
        <img
          src={
            technologys && technologys[techId].name === "Launch vehicle"
              ? vehicleLandscape
              : technologys && technologys[techId].name === "Spaceport"
              ? spaceportLandscape
              : technologys && technologys[techId].name === "Space capsule"
              ? capsuleLandscape
              : ""
          }
          alt="bg"
          className="mt-8 w-full lg:order-3 lg:hidden"
        />

        <img
          src={
            technologys && technologys[techId].name === "Launch vehicle"
              ? vehiclePortrait
              : technologys && technologys[techId].name === "Spaceport"
              ? spaceportPortrait
              : technologys && technologys[techId].name === "Space capsule"
              ? capsulePortrait
              : ""
          }
          alt="bg"
          className="hidden aspect-square lg:order-3 lg:block"
        />

        <div className="flex justify-center w-full items-center gap-2 mt-[34px] lg:flex-col lg:order-1  ">
          {technologys &&
            technologys.map((tech, index) => (
              <div
                className={` rounded-full px-6 py-4 cursor-pointer ${
                  techId === index ? "bg-third" : "border text-third"
                }`}
                onClick={() => setTechId(index)}
              >
                <span
                  className={`${
                    techId === index ? "text-primary" : "text-secondary"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
            ))}
        </div>

        <div className="w-screen mt-[26px]  md:mt-[44px] md:px-[155px]  lg:px-[0px] lg:mr-[130px] lg:mt-[0px] lg:order-2 lg:w-fit">
          <h2 className="uppercase text-third opacity-75 font-bellefair text-center text-sm md:text-[24px] lg:text-sm lg:text-start">
            The terminology ...
          </h2>
          <h1 className="uppercase font-bellefair text-[24px] text-third text-center md:text-[40px] lg:text-xl lg:text-start">
            {technologys && technologys[techId].name}
          </h1>
          <p className="text-[15px] text-center px-6 text-secondary md:text-sm md:px-0 lg:text-start lg:px-0">
            {technologys && technologys[techId].description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Technology;
