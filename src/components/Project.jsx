import React from "react";
import interviewer from "../assests/interviewer.gif";
import light from "../assests/light-3.gif";
import tweeter from "../assests/tweeter.gif";
import {
  FaGithub,
} from "react-icons/fa";

const ProjectCopy = () => {
  return (
    <div
      name="projects"
      className="h-fit w-full text-#576F72 bg-[#F0EBE3] project-div "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-#576F72 border-[#576F72]">
            Projects
          </p>
        </div>

        <div className="mt-10 mb-12 flex flex-row">
          <div>
            <div className = "flex flex-row">
            <p className="text-xl font-bold inline border-b-4 text-#576F72 border-[#576F72]">
              Lightmarket
            </p>
            <a
              className="ml-6"
              href="https://github.com/melonaster3/light_marketplace"
            >
              <FaGithub size={30}/>
            </a>
            </div>
            <div className="border rounded w-full h-fit m-5 hover:shadow-lg hover:shadow-[#040c16] ">
              <img className="object-contain" src={light} alt = "lightmarket"></img>
            </div>
            <div className = "flex flex-row ">
            <p className="ml-6 mt-2 font-bold text-lg inline text-#576F72 ">
            JavaScript, Node.js, Express.js, PostgreSQL
            </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-12 flex flex-row">
          <div>
            <div className = "flex flex-row">
            <p className="text-xl font-bold inline border-b-4 text-#576F72 border-[#576F72] ">
              Scheduler
            </p>
            <a
              className="ml-6"
              href="https://github.com/melonaster3/scheduler"
            >
              <FaGithub size={30}/>
            </a>
            </div>
            <div className="border rounded w-full h-fit m-5 hover:shadow-lg hover:shadow-[#040c16] ">
              <img className="object-contain" src={interviewer}  alt = "scheduler"></img>
            </div>
            <div className = "flex flex-row ">
            <p className="ml-6 mt-2 font-bold text-lg inline text-#576F72 ">
            JavaScript, CSS, React, HTML5, Axios
            </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-12 flex flex-row">
          <div>
            <div className = "flex flex-row">
            <p className="text-xl font-bold inline border-b-4 text-#576F72 border-[#576F72]">
              Tweeter
            </p>
            <a
              className="ml-6"
              href="https://github.com/melonaster3/tweeter"
            >
              <FaGithub size={30}/>
            </a>
            </div>
            <div className="border rounded w-full h-fit m-5 hover:shadow-lg hover:shadow-[#040c16]">
              <img className="object-contain	" src={tweeter}  alt = "tweeter"></img>
            </div>
            <div className = "flex flex-row ">
            <p className="ml-6 mt-2 text-lg font-bold  inline text-#576F72 ">
            JavaScript, CSS, Express
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCopy;
