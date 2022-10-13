import React from "react";

function ExpandedInfo({ hog }) {
  return (
    <div>
      <h3>Specialty: {hog.specialty}</h3>
      <h3>Weight: {hog.weight}</h3>
      <h3>Greased: {hog.greased ? "Very Greasy..." : "Nope!"}</h3>
      <h3>Highest Medal: {hog["highest medal achieved"]}</h3>
    </div>
  );
}

export default ExpandedInfo;
