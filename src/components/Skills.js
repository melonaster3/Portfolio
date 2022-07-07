import React from "react";
import CSS from '../assests/css.png'
import GITHUB from '../assests/github.png'
import HTML from '../assests/html.png'
import JS from '../assests/javascript.png'
import NODE from '../assests/node.png'
import REACT from '../assests/react.png'
import RUBY from '../assests/ruby.png'
import TAILWIND from '../assests/tailwind.png'


const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className = 'text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={HTML}></img>
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={CSS}></img>
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={JS}></img>
                <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={TAILWIND}></img>
                <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={NODE}></img>
                <p className="my-4">Node.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={REACT}></img>
                <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={RUBY}></img>
                <p className="my-4">Ruby</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-14">
                <img className= "w-20 mx-auto"src={GITHUB}></img>
                <p className="my-4">Github</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
