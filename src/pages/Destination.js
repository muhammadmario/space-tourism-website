import React from "react";
import bgMobileDestination from "../img/destination/background-destination-mobile.jpg";
import bgTabletDestination from "../img/destination/background-destination-tablet.jpg";
import bgDesktopDestination from "../img/destination/background-destination-desktop.jpg";
import Moon from "../img/destination/image-moon.png";
import Mars from "../img/destination/image-mars.png";
import Europa from "../img/destination/image-europa.png";
import Titan from "../img/destination/image-titan.png";
import axios from "../api/axios";
import { useEffect, useState } from "react";

function Destination() {
  const [destinations, setDestinations] = useState(null);
  const [destinationId, setDestinationId] = useState(0);

  const fetchDestinations = async () => {
    const response = await axios.get("/destinations");
    console.log(response.data);
    setDestinations(response.data);
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // console.log(destination[0].name);
  // console.log(destinations);

  return (
    <section
      className={`min-h-screen w-screen pt-20 flex flex-col items-center text-third lg:flex-row lg:justify-start lg:items-start`}
    >
      <img
        src={bgMobileDestination}
        alt="bg"
        className="absolute top-0 bottom-0 w-full -z-10 h-full bg-cover block md:hidden"
      />
      <img
        src={bgTabletDestination}
        alt="bg"
        className="absolute top-0 bottom-0 w-full -z-10 h-full bg-cover hidden md:block"
      />
      <img
        src={bgDesktopDestination}
        alt="bg"
        className="absolute top-0 bottom-0 w-full -z-10 h-full bg-cover hidden lg:block"
      />
      <div className="flex flex-col justify-center items-center md:mt-10  lg:flex-row lg:mt-[76px]">
        <div className="lg:w-1/2 lg:pl-[166px]">
          <h1 className="uppercase text-third text-sm md:text-[24px] lg:self-start lg:text-base">
            <span className="font-bold mr-2 text-secondary">01</span>
            Pick your destination
          </h1>
          <div className="flex justify-center items-center w-full mt-12 md:mt-[60px] lg:justify-start lg:items-start lg:mt-[97px]">
            <img
              src={
                destinations && destinations[destinationId].name === "Moon"
                  ? Moon
                  : destinations && destinations[destinationId].name === "Mars"
                  ? Mars
                  : destinations &&
                    destinations[destinationId].name === "Europa"
                  ? Europa
                  : destinations && destinations[destinationId].name === "Titan"
                  ? Titan
                  : ""
              }
              alt="bg"
              className=" h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:w-[400px] lg:h-[400px]"
            />
          </div>
        </div>
        <div className="flex items-center flex-col lg:items-start lg:w-1/2 ">
          <div
            className="inline-flex rounded-md shadow-sm mt-[26px] md:mt-[53px]"
            role="group"
          >
            {destinations &&
              destinations.map((destination, index) => (
                <div
                  onClick={() => setDestinationId(index)}
                  className={` ${
                    destinationId === index ? "border-b-2" : ""
                  } cursor-pointer py-2 px-4 text-sm uppercase font-medium text-gray-900 bg-transparent  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white  dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700`}
                >
                  {destination.name}
                </div>
              ))}
          </div>
          <h1 className="uppercase font-bellefair text-xl mt-[20px] md:mt-8 md:text-[80px] lg:self-start lg:text-xxl">
            {destinations && destinations[destinationId].name}
          </h1>
          <p className="text-secondary text-[15px] text-center px-5 leading-6 md:text-sm md:px-32 md:leading-8 lg:px-0 lg:pr-20 lg:self-start lg:text-justify lg:text-[18px] lg:mr-32">
            {destinations && destinations[destinationId].description}
          </p>
          <div className="hidden md:block border-b w-3/4 mt-[54px] bg-secondary"></div>
          <div className="flex w-3/4 flex-col justify-center items-center md:flex-row  md:justify-around lg:justify-between mt-7">
            <div className="flex flex-col">
              <h2 className="text-xs text-center uppercase md:text-start text-secondary mb-3">
                Avg. Distance
              </h2>
              <h1 className="text-base uppercase font-bellefair">
                {destinations && destinations[destinationId].distance}
              </h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xs text-center md:text-start uppercase text-secondary mb-3">
                Est. Travel Time
              </h2>
              <h1 className="text-base uppercase font-bellefair">
                {destinations && destinations[destinationId].travel}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
