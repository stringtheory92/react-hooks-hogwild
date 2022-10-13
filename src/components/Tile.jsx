import React from "react";
//import ExpandedInfo from "./ExpandedInfo";
import TileContents from "./TileContents";

function Tile({ currentHogs }) {
  console.log("tile: currentHogs", currentHogs);
  const displayedHogs = currentHogs.map((hog) => {
    return <TileContents hog={hog} key={hog.name} />;
  });
  return <>{displayedHogs}</>;
}

export default Tile;
