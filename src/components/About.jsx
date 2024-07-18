import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full px-4">
            <div>
              <p>
                {" "}
                I am Krishanu, my friends call me Krish. I am a Full Stack Data Scientist working on the applications of AI for solving different business and research problems.
                Currently I am working at Deloitte AI Center of Excellence as a Lead Data Scientist. Prior to Deloitte, I have worked at TCS Research.
              </p>
              <p>
               {" "}
                I am primarily a self taught Data Scientist, my formal education is in Biomedical Engineering. I hold a Masters in Technology from Indian Institute of Technology Bombay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;