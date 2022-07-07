import React from "react";
import PROFILE from "../assests/profile.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#F0EBE3] text-#576F72">
      <div className= "max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="mb-10">
            <p className="text-4xl font-bold inline border-b-4 border-[#576F72]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-items-center items-center ">
            <div className="w-4/5 h-full mr-68">
              <img
                className="mt-2 rounded-full border border-gray-100 shadow-sm "
                src={PROFILE}
              />
            </div>
          </div>
          <div className= "mt-2 flex flex-col justify-items-center ">
            <p>
              <br/>
              A Full Stack Web Developer specialized in creating interactive
              experiences. I am passionate on the projects  <br/> I build and love to
              learn new languages and skills. Creative in frontend development
              and meticulous in backend development.
            </p>
            <p className="mt-4">
              <b>Education</b>
            </p>
            University of Calgary : BSc. Chemical Engineering <br />
            Lighthouse Labs : Diploma Full Stack Web Development 
            <p className="mt-4">
              <b>Location</b>
            </p>
            Calgary, Canada <br />
            Seoul, South Korea
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
