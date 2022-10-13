import React, { useState } from "react";
import ExpandedInfo from "./ExpandedInfo";

function TileContents({ hog }) {
  const [isTileExpanded, setIsTileExpanded] = useState(false);

  function handleExpansion() {
    setIsTileExpanded(!isTileExpanded);
  }

  console.log("isTileExpanded: ", isTileExpanded);

  return (
    <div className="hogTile" onClick={handleExpansion}>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name + hog.specialty} />
      {isTileExpanded ? <ExpandedInfo hog={hog} /> : null}
    </div>
  );
}

export default TileContents;
