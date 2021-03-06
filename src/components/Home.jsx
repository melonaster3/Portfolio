import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import videoBg from "../assests/video4.mp4";

const HomeCopy = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#F0EBE3] justify-center flex flex-col items-center">
      <video id="video" className = "w-full h-full object-cover"src={videoBg} autoPlay loop muted />
      <div className="absolute max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ml-20">
        <p className="text-[#F0EBE3] ml-2" data-aos="fade-right">Welcome! </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#F0EBE3]" data-aos="fade-left">Sang Lee</h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#F0EBE3] mt-2" data-aos="fade-right">
        Full Stack Web Developer
        </h1>
        <p className="text-[#F0EBE3] py-4 max-w" data-aos="zoom-in">Creative Innovative Productive</p>
        <div>
          <button className="text-[#F0EBE3] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#76BB85] hover:border-[#76BB85]" data-aos="zoom-out">
            <Link to="about" smooth={true} duration={500}>
              View Page
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCopy;
