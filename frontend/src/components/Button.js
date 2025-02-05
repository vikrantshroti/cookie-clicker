import React from "react";

const Button = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    {label}
  </button>
);

export default Button;
