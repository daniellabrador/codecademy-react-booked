import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map(obj => {
        return (
          <Tile data={obj} />
        )
      })}
    </div>
  );
};
