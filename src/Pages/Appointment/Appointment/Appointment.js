import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import SelectAppointment from '../SelectAppointment/SelectAppointment';

function Appointment() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <SelectAppointment date={date} />
    </div>
  );
}

export default Appointment;
