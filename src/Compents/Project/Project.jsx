import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build fast, scalable, and secure web applications.",
    icon: "fa fa-code",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "We build mobile apps for both iOS and Android.",
    icon: "fa fa-mobile",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "We help you grow your business with our digital marketing services.",
    icon: "fa fa-chart-line",
  },
  {
    id: 4,
    title: "E-commerce Development",
    description:
      "We build e-commerce websites that are fast, secure, and scalable.",
    icon: "fa fa-shopping-cart",
  },
  {
    id: 5,
    title: "Cyber Security",
    description:
      "We protect your business from cyber threats with our robust security solutions.",
    icon: "fa fa-lock",
  },
  {
    id: 6,
    title: "Cloud Computing",
    description:
      "We help you migrate to the cloud and manage your cloud infrastructure.",
    icon: "fa fa-cloud",
  },
];

function Project() {
  return (
    <div className="md:py-16" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-12 text-center ">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((services) => (
            <div
              key={services.id}
              className=" border border-white rounded-lg w-54 h-[15rem] hover:shadow-lg transform transition-transform duration-300 hover:scale-105
                    hover:bg-orange-900"
            >
              <div
                className=" bg-white text-2xl font-bold text-transparent bg-clip-text py-2 px-6
                          bg-gradient-to-t from-orange-700 via-yellow-200"
              >
                {services.id}
              </div>
              <h3
                className="bg-white text-2xl font-bold text-transparent bg-clip-text  px-6
                          bg-gradient-to-t from-orange-700 via-orange-400"
              >
                {services.title}
              </h3>
              <p className=" text-sm px-6 lg:mt-4 md:mt-0 mt-4">
                {services.description}
              </p>
              <a
                href="#"
                className="py-2 px-3 mx-6 relative md:top-3 lg:top-8 top-6 border rounded-md text-lg bg-gradient-to-t from-orange-700 via-orange-400 to-yellow-500"
              >
                Red more...
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
