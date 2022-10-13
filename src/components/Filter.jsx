import React, { useState } from "react";

function Filter({
  currentHogs,
  setCurrentHogs,
  allHogs,
  isFiltered,
  setIsFiltered,
}) {
  function handleFilter() {
    setIsFiltered(!isFiltered);
    const filteredHogs = isFiltered
      ? allHogs.filter((hog) => {
          console.log("hog.greased: ", hog.greased);
          return hog.greased;
        })
      : allHogs;
    updateHogList(filteredHogs);
  }

  function updateHogList(filteredHogs) {
    setCurrentHogs(filteredHogs);
  }

  console.log("isFiltered: ", isFiltered);

  return (
    <button onClick={handleFilter}>
      {isFiltered ? "Give Me The Greasy Ones!" : "Show Me Everything!"}
    </button>
  );
}

export default Filter;
