import React from 'react';

function Button({ children }) {
  return (
    <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
}

export default Button;
