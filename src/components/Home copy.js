import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import videoBg from "../assests/video.mov";

const HomeCopy = () => {
  return (
    <div name="home" className="static w-full h-screen bg-[#0a192f] justify-center flex flex-col items-center">
      <video id="video" className = "static w-full h-full object-cover"src={videoBg} autoPlay loop muted />
      <div className="absolute max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Welcome! </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Sang Lee</h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-white mt-1">
        Full Stack Web Developer
        </h1>
        <p className="text-white py-4 max-w">Here to give all i can</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="about" smooth={true} duration={500}>
              View Page
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight classname="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCopy;
