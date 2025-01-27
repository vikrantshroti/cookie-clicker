import React from "react";

const Button = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Click Me!
  </button>
);

export default Button;
