import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/linkedin_pic.jpeg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h4 className="text-2xl sm:text-3xl font-bold text-white">
          Hey, I am Krish
        </h4>
        {/* <h4 className="text-2xl sm:text-3xl font-bold text-white">
          Welcome to my page.
        </h4> */}
        <p className="text-gray-500 py-4 max-w-xl">
        I am a Full Stack Data Scientist. Welcome to my page.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            More About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-3xl mx-auto w-2/3 md:w-3/4"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;