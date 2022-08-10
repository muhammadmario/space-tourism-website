import React from "react";
import bgMobileCrew from "../img/crew/background-crew-mobile.jpg";
import bgTabletCrew from "../img/crew/background-crew-tablet.jpg";
import bgDesktopCrew from "../img/crew/background-crew-desktop.jpg";
import victor from "../img/crew/image-victor-glover.png";
import douglas from "../img/crew/image-douglas-hurley.webp";
import anousheh from "../img/crew/image-anousheh-ansari.png";
import mark from "../img/crew/image-mark-shuttleworth.png";
import axios from "../api/axios";
import { useEffect, useState } from "react";

function Crew() {
  const [crews, setCrews] = useState();
  const [crewId, setCrewId] = useState(0);

  const fetchCrew = async () => {
    const response = await axios.get("/crew");
    // console.log(response.data);
    setCrews(response.data);
  };

  useEffect(() => {
    fetchCrew();
  }, []);

  return (
    <section
      className={`min-h-screen relative w-full pt-20 flex flex-col items-center text-third lg:justify-start lg:items-start`}
    >
      {/* background */}
      <img
        src={bgMobileCrew}
        alt="bg"
        className="absolute top-0  w-full -z-10 h-full bg-cover  block md:hidden"
      />
      <img
        src={bgTabletCrew}
        alt="bg"
        className="absolute top-0  w-full -z-10 h-full bg-cover hidden md:block"
      />
      <img
        src={bgDesktopCrew}
        alt="bg"
        className="absolute top-0  w-full -z-10 h-full bg-cover hidden lg:block"
      />
      {/* background */}

      <h1 className="uppercase text-third text-sm text-center md:text-[24px] md:text-start md:pl-16 lg:text-base md:pt-[40px] lg:pt-[70px] lg:pl-[165px]">
        <span className="font-bold mr-2 text-secondary opacity-75">02</span>
        Meet your crew
      </h1>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex flex-col md:order-2 lg:w-1/2">
          <img
            src={
              crews && crews[crewId].name === "Douglas Hurley"
                ? douglas
                : crews && crews[crewId].name === "Mark Shuttleworth"
                ? mark
                : crews && crews[crewId].name === "Victor Glover"
                ? victor
                : crews && crews[crewId].name === "Anousheh Ansari"
                ? anousheh
                : ""
            }
            alt="victor"
            className=" h-[222px] w-[177px] m-auto mt-3 md:order-2  md:h-[532px] md:w-[433px] lg:order-1 lg:mt-0 lg:max-h-[80vh] lg:w-[568px] lg:h-[712px]"
          />

          <div className="mt-[-80px] flex justify-center md:order-1 lg:order-2 lg:hidden">
            {crews &&
              crews.map((crew, index) => (
                <span
                  className="text-third text-xxl opacity-75 cursor-pointer"
                  onClick={() => setCrewId(index)}
                >
                  .
                </span>
              ))}
          </div>
        </div>

        <div className="md:order-1 md:mt-[60px] lg:w-1/2 lg:pl-[165px]">
          <h2 className="uppercase text-third opacity-75 font-bellefair text-center text-sm md:text-[24px] lg:text-lg lg:text-start">
            {crews && crews[crewId].role}
          </h2>
          <h1 className="uppercase font-bellefair text-[24px] text-third text-center md:text-[40px] lg:text-xl lg:text-start">
            {crews && crews[crewId].name}
          </h1>
          <p className="text-[15px] text-center px-2 text-secondary md:text-sm md:px-32 lg:text-start lg:px-0">
            {crews && crews[crewId].bio}
          </p>
          <div className="hidden mt-[-80px] lg:flex">
            {crews &&
              crews.map((crew, index) => (
                <span
                  className="text-third text-xxl cursor-pointer"
                  onClick={() => setCrewId(index)}
                >
                  .
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crew;
