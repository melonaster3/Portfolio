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
    <div name="skills" className="bg-[#E4DCCF] text-#576F72 w-full h-screen">
      <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className = 'text-4xl font-bold inline border-b-4 border-[#576F72]'>Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={HTML}></img>
                <p className="my-4">HTML</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6 ">
                <img className= "w-20 mx-auto"src={CSS}></img>
                <p className="my-4">CSS</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={JS}></img>
                <p className="my-4">JavaScript</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={TAILWIND}></img>
                <p className="my-4">Tailwind</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={NODE}></img>
                <p className="my-4">Node.js</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={REACT}></img>
                <p className="my-4">React</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={RUBY}></img>
                <p className="my-4">Ruby</p>
            </div>
            <div className="hover:bg-[#F0EBE3] hover:scale-110 hover:font-bold duration-500 mt-14 pt-6">
                <img className= "w-20 mx-auto"src={GITHUB}></img>
                <p className="my-4">Github</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
