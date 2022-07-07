import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

        <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Welcome! My name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Sang Lee</h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          I am a Full Stack Web Developer
        </h1>
        <p className="text-white py-4 max-w">Creative Innovative Productive</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="projects" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight classname="ml-3" />
            </span>
          </button>
        </div>
        </div>
1``
    </div>
  );
};

export default Home;
