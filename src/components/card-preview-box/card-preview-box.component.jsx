import React from "react";
import "../../App.css";

const CardPreviewBox = ({ selectedMonsters, onSelect }) => {
  return (
    <div className="card-preview-box fixed-top">
      {selectedMonsters.map((monster) => (
        <div key={monster.id} className="card-container-preview">
          <img
            src={`https://robohash.org/${monster.id}?set=set2&size=90x90`}
            alt={`monster ${monster.name}`}
            onClick={() => onSelect(monster.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardPreviewBox;
