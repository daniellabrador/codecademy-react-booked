import React from "react";

const Tile = ({ data }) => {
  const dataKeys = Object.keys(data)
  const dataValues = Object.values(data)
  const generateClassName = i => i===0 ? "tile tile-title" : "tile";

  return (
    <div className="tile-container">
      {dataValues.map((value, i) =>
        <p
          className={generateClassName(i)}
          key={`${dataKeys[i]}-${i}`}>{value}
        </p>
      )}
    </div>
  );
};

export default Tile;
