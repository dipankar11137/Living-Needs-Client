import React from 'react';
import '../../CSS/ZoomBackground.css';
import Text from './Text';

const ZoomBackground = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.vox-cdn.com/thumbor/Lu9VbXgbw5-BOwS7L8iSeWaM0qo=/0x17:1273x733/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50282523/vrg_1170_airspace_05.0.0.gif")`,
      }}
      className=" "
    >
      <div className="pt-32 pb-5">
        <Text />
      </div>
    </div>
  );
};

export default ZoomBackground;
