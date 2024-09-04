import React from "react";
import { FaMapMarkedAlt, FaPhone, FaRegEnvelope } from "react-icons/fa"



function Foter() {
  return (
    <div className="py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-12 text-center ">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
                  <div className="flex-1">
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text
                          bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-400 mb-3">Let's Talk</h3>
                      <p> I'm open to discussing web development projects or <br /> partnership opportunities.</p>
            <div className="mb-4 mt-8">
                        <FaRegEnvelope className="inline-block  mr-2"></FaRegEnvelope>
              <a href="atifwazir30@gmail.com" className="hover:underline">
                atifwazir30@gmail.com
                       </a>
            </div>
            
             <div className="mb-4">
                       <a href=""><FaPhone className="inline-block  mr-2"></FaPhone></a> 
                 <span className="hover:underline">+92-03171847693</span>
                     </div>

             <div className="mb-4 ">
                        <FaMapMarkedAlt className="inline-block  mr-2"></FaMapMarkedAlt>
                 <span className="hover:underline">Karachi Pakistan</span>
                     </div>

                  </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"placeholder="Enter Your Name" />
              </div>

                <div>
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"placeholder="Enter Your Email" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"
                  rows={5}
                  placeholder="Enter Your Message" />
              </div>
              <button type="submit" className="bg-orange-700 hover:bg-orange-600 text-white
              font-bold py-2 px-4 rounded">Send Message</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
import { FaEnvelope } from "react-icons/fa";

export default Foter;
