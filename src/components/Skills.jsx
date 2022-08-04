import React from "react";
import CSS from "../assests/css.png";
import GITHUB from "../assests/github.png";
import HTML from "../assests/html.png";
import JS from "../assests/javascript.png";
import NODE from "../assests/node.png";
import REACT from "../assests/react.png";
import RUBY from "../assests/ruby.png";
import TAILWIND from "../assests/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[black] text-[#F0EBE3] w-full h-fit  pt-56 pb-96  "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-10">
          <p
            className="text-4xl font-bold inline border-b-4 border-[#76BB85]"
            data-aos="fade-down"
          >
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-down"
          >
            <img className="w-20 mx-auto" src={HTML} alt="HTML"></img>
            <p className="my-4">HTML</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-down"
          >
            <img className="w-20 mx-auto" src={CSS} alt="CSS"></img>
            <p className="my-4">CSS</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-down"
          >
            <img className="w-20 mx-auto" src={JS} alt="JS"></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-down"
          >
            <img className="w-20 mx-auto" src={TAILWIND} alt="Tailwind"></img>
            <p className="my-4">Tailwind</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-up"
          >
            <img className="w-20 mx-auto" src={NODE} alt="node"></img>
            <p className="my-4">Node.js</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-up"
          >
            <img className="w-20 mx-auto" src={REACT} alt="react"></img>
            <p className="my-4">React</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-up"
          >
            <img className="w-20 mx-auto" src={RUBY} alt="ruby"></img>
            <p className="my-4">Ruby</p>
          </div>
          <div
            className="hover:bg-white hover:scale-110 hover:font-bold hover:text-[black] duration-500 mt-14 pt-6"
            data-aos="flip-up"
          >
            <img className="w-20 mx-auto" src={GITHUB} alt="github"></img>
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
