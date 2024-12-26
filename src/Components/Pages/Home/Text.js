import React from 'react';
import '../../CSS/Text.css';

const Text = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      className="flex justify-center  pt-72 "
    >
      <div class="container ">
        <div class="row">
          <div class="w-[940px] bg-white pl-2  rounded-xl ml-[180px] ">
            <h3 class="animate-character font-bold my-0 ml-5">
              {' '}
              Daily_Living_Needs.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
