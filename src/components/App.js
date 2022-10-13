import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import hogs from "../porkers_data";
import TileContents from "./TileContents";
import Filter from "./Filter";
import Sort from "./Sort";

function App() {
  console.log("here's your data! ", hogs);
  const [currentHogs, setCurrentHogs] = useState(hogs);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="App">
      <Nav />
      <Filter
        currentHogs={currentHogs}
        setCurrentHogs={setCurrentHogs}
        allHogs={hogs}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
      />
      <Sort currentHogs={currentHogs} setCurrentHogs={setCurrentHogs}></Sort>
      <div className="ui grid container">
        <Tile currentHogs={currentHogs}>
          <TileContents currentHogs={currentHogs} />
        </Tile>
      </div>
    </div>
  );
}

export default App;
