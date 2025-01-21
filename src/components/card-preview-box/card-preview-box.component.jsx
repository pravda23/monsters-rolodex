import { useEffect, React } from "react";
import PreviewPlaceholder from "../preview-placeholder.component";
import "../../App.css";
import "./card-preview.styles.css";

const CardPreviewBox = ({ selectedMonsters, onSelect }) => {
  useEffect(() => {
    console.log(selectedMonsters);
    console.log(selectedMonsters);
  }, [selectedMonsters]);

  if (selectedMonsters.length > 0) {
    return (
      <div className="card-preview-box fixed-top">
        {selectedMonsters.map((monster) => (
          <div key={monster.id} className="card-container-preview">
            <img
              src={`https://robohash.org/${monster.id}?set=set2&size=90x90`}
              alt={`monster ${monster.name}`}
              className="image-preview"
              onClick={() => onSelect(monster.id)}
            />
            <div className="preview-name">{monster.name}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return <PreviewPlaceholder />;
  }
};

export default CardPreviewBox;
