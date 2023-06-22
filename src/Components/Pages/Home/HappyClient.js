import React from "react";

const HappyClient = () => {
  return (
    <div className="mt-5 text-black mx-32 pb-5">
      <h1 className="text-2xl font-semibold">SOME HAPPY FACES</h1>
      <h1 className="text-5xl font-semibold mb-3">
        Real Happy Customers, Real Stories
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl mt-20">
            Such service platforms are available in other countries. I have when
            I I personally used them when I was abroad. I am very happy that
            Such a portal in Bangladesh is also available here. thank you
          </h1>
          <h1 className="text-xl font-semibold mt-3">Nusrat Faria</h1>
          <p>IT Consultant, Dhaka</p>
        </div>
        <div>
          <img
            className="h-80 ml-10 rounded-full"
            src="https://media.istockphoto.com/id/497226663/photo/bangladesh-people.jpg?s=170667a&w=0&k=20&c=2616b1FJmwqHxvIqrU3SEcYiEIMg2lBQog9Y-xdw5YU="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
