import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        setCards(data);

        setFilteredCards(data);
      });
  }, []);
  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter cards based on search query
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };
  return (
    <div className=" lg:m-4 rounded-2xl pb-8">
      <div className="px-12 mx-auto  mb-4">
        <div className="flex justify-between mx-20  text-center items-center mr-20 mb-5 mt-[-5px]">
          <div>
            <h1 className="text-black text-center text-5xl  font-bold py-6">
              Our Services
            </h1>
          </div>
          <div className=" ">
            <input
              className="text-black  h-10 w-[300px] rounded-lg text-xl pl-2 shadow-2xl shadow-indigo-600 hover:shadow-2xl hover:shadow-red-700 border-2 border-black"
              type="text"
              placeholder="Search Services..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-3">
          {filteredCards.slice(0, 12).map(service => (
            <Service key={service.id} title={service.name} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
