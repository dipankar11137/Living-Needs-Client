import React, { useEffect, useState } from 'react';
import Footer from '../../Share/Footer';
import Technician from './Technician';

const ComputerTechnicians = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allServices/ComputerTechnician')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setFilteredServices(data); // Initialize with all services
      });
  }, []);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
    // search
    const filtered = services.filter(service =>
      service.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredServices(services);
  };
  // console.log(services);
  return (
    <div className="bg-slate-200">
      <div className="mx-28 mb-10">
        {/* Search Section */}
        <div className="py-4 flex justify-between items-center">
          <h1 className="font-bold text-4xl pl-4">Computer Technician</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search by address"
              value={searchQuery}
              onChange={handleSearch}
              // onChange={e => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg mr-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Search
            </button>
            <button
              onClick={handleClearSearch}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Technicians Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {filteredServices.map(service => (
            <Technician key={service._id} service={service}></Technician>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComputerTechnicians;

// import React, { useEffect, useState } from "react";
// import Footer from "../../Share/Footer";
// import Technician from "./Technician";

// const ComputerTechnicians = () => {
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/allServices/ComputerTechnician")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);
//   return (
//     <div className="bg-slate-200">
//       <div className="mx-28 mb-10">
//         <h1 className="py-4 font-bold text-4xl pl-4">Computer Technician</h1>
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
//           {services.map((service) => (
//             <Technician key={service._id} service={service}></Technician>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ComputerTechnicians;
