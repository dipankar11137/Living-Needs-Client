import React, { useEffect, useState } from "react";
import Footer from "../../Share/Footer";
import Technician from "./Technician";

const Cleaner = () => {
  const [services, setServices] = useState([]);
   const [searchQuery, setSearchQuery] = useState(''); // State for search query
   const [filteredServices, setFilteredServices] = useState([]);
   useEffect(() => {
     fetch('http://localhost:5000/allServices/Cleaner')
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

   return (
     <div className="bg-slate-200">
       <div className="mx-28 mb-10">
         <div className="py-4 flex justify-between items-center">
           <h1 className="font-bold text-4xl pl-4">Cleaner</h1>
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

export default Cleaner;
