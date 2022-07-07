import React from "react";
import Lightmarket from "../assests/lightmarket.png";

const Project = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-#576F72 bg-[#F0EBE3]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-#576F72 border-[#576F72]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="flex flex-col sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Grid Item */}
       
        <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto w-full h-full">
        <img className = "w-6 h-2 "src = {Lightmarket}></img>
  
        </div>

          <div
            style={{ backgroundImage: `url(${Lightmarket})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Scheduler
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/melonaster3/scheduler">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Lightmarket})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Portfolio Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/melonaster3/scheduler">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
