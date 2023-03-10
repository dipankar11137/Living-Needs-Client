import React, { useEffect, useState } from "react";
import Footer from "../Share/Footer";
import ComputerTechnician from "./ComputerTechnician";

const ComputerTechnicians = () => {
  const [computers, setComputers] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="mx-28 mb-10">
        <h1 className="py-4 font-bold text-4xl pl-4">Computer Technician</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {computers.map((computer) => (
            <ComputerTechnician
              key={computer._id}
              computer={computer}
            ></ComputerTechnician>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComputerTechnicians;
