import React, { useEffect, useState } from "react";
import Footer from "../../Share/Footer";
import Technician from "./Technician";

const AmbulanceServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices/AmbulanceServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      {services.length === 0 ? (
        <h1 className="p-5 text-3xl font-bold text-red-600 text-center">
          No service at this time
        </h1>
      ) : (
        <div className="bg-slate-200">
          <div className="mx-28 mb-10">
            <h1 className="py-4 font-bold text-4xl pl-4">Ambulance Services</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
              {services.map(service => (
                <Technician key={service._id} service={service}></Technician>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default AmbulanceServices;
