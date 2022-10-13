import React from "react";

function Sort({ currentHogs, setCurrentHogs, children }) {
  function handleNameSort() {
    const sorted = [...currentHogs].sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });

    console.log("unsorted(name):", currentHogs);
    console.log("sorted(name):", sorted);
    setCurrentHogs(sorted);
  }

  function handleWeightSort() {
    const sorted = [...currentHogs].sort((a, b) => {
      if (a.weight > b.weight) return 1;
      if (a.weight < b.weight) return -1;
      return 0;
    });
    console.log("sorted(weight): ", sorted);
    setCurrentHogs(sorted);
  }

  console.log("Sort: currentHogs", currentHogs);
  console.log("Sort: children", children);

  return (
    <div>
      <button onClick={handleNameSort}>Sort by Name</button>
      <button onClick={handleWeightSort}>Sort by Weight</button>
      {/* {children} */}
    </div>
  );
}

export default Sort;
