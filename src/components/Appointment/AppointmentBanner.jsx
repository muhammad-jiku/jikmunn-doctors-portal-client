import React from 'react';

//  external imports
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

//  internal import
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen lg:px-12">
      <div className="bg-banner-image bg-contain bg-no-repeat w-full h-full">
        <div className="bg-base-100 bg-opacity-95 h-full hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="rounded-lg shadow-2xl lg:max-w-sm"
          />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              // onSelect={setDate}
              onDayClick={setDate} // is used for preventing 'date-fns' error of RangeError: Invalid time value
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
