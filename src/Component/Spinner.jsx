import React from "react";
import spinner1  from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner1}
        width={180}
        className="text-center mx-auto"
        alt="spinner..."
      />
    </div>
  );
}

export default Spinner;
