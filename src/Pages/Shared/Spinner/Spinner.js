import React from 'react';

function Spinner() {
  return (
    <div className="conatiner flex justify-between items-center h-28">
      <h1 className="uppercase text-secondary font-bold italic">Loading...</h1>{' '}
      <progress className="progress progress-secondary w-56 justify-center"></progress>
    </div>
  );
}

export default Spinner;
