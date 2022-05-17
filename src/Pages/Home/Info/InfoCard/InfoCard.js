import React from 'react';

function InfoCard({ img, cardTitle, bgClass }) {
  return (
    <div className={`card p-6 ${bgClass} lg:card-side shadow-xl`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
}

export default InfoCard;
