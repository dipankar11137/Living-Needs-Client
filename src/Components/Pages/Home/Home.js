import React from 'react';
import Footer from '../Share/Footer';
import Advertisement from './Advertisement';
import Banner from './Banner';
import HappyClient from './HappyClient';
import OurServices from './OurServices';
import PaymentIcon from './PaymentIcon';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div className="bg-slate-300 text-white">
      <div className="mx-7 pb-7 ">
        <Banner />
      </div>
      {/* <ZoomBackground /> */}
      <Services />
      <Advertisement />
      <OurServices />
      <WhyChooseUs />
      <HappyClient />
      <PaymentIcon />
      <Footer />
    </div>
  );
};

export default Home;
