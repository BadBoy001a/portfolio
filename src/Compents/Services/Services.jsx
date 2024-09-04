import React from "react";
import about_profile from "../../assets/about_profile.svg";

function Services() {
  return (
  <div className="py-20" id="about me" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-12 text-center ">About me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            className="w-72 h-80 md:h-96 rounded object-cover mb-8 md:mb-0"
            src={about_profile}
            alt=""
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate Frontend developer with a strong background in
              HTML, CSS, JavaScript, and React. I have a keen eye for detail and
              a love for creating visually appealing and user-friendly
              interfaces. I am always looking for opportunities to learn and
              grow as a developer and to contribute to projects that make a
              positive impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="html5 css3" className="w-2/12">
                  HTML5 & CSS3
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="html5 css3" className="w-2/12">
                  Bootstrap & Tailwindcss
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="html5 css3" className="w-2/12">
                  Javascript & React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>

            <div className="sm:mt-12 mt-5 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 ">
                  1+
                </h3>
                <p>Years of experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 ">
                  10+
                </h3>
                <p>Projects completed</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 ">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
