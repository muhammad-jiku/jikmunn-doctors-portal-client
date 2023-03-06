import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingBar from '../Shared/LoadingBar';
import AppointmentModal from './AppointmentModal';
import AppointmentService from './AppointmentService';

const SelectAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  // date && format(date,'PP') is used for preventing 'date-fns' error of RangeError: Invalid time value
  // const formattedDate = date && format(date, 'PP');
  const formattedDate = format(date, 'PP');

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <LoadingBar />;

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data))
  //     .catch((err) => console.log(err));
  // }, [formattedDate]);
  return (
    <div className="my-6">
      <h1 className="text-xl text-center text-secondary font-bold">
        Available Services on {formattedDate}
      </h1>
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-12">
        {services?.map((service) => (
          <AppointmentService
            key={service?._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default SelectAppointment;
