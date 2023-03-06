import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import SelectAppointment from './SelectAppointment';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <SelectAppointment date={date} />
    </div>
  );
};

export default Appointment;
