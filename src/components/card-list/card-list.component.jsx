import { useEffect } from "react";
import Card from "../card/card.component";
import CardPreviewBox from "../card-preview-box/card-preview-box.component";
import "./card-list.styles.css";

const CardList = ({ monsters, onSelect, selectedMonsters }) => {
  useEffect(() => {
    console.log(selectedMonsters);
  }, [selectedMonsters]);

  return (
    <>
      <div className="card-list scrollable-cardlist">
        {monsters.map((monster) => {
          const isSelected = selectedMonsters.find(
            (selectedMonster) => selectedMonster.id === monster.id
          );
          return (
            <Card
              monster={monster}
              key={monster.id}
              onSelect={onSelect}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
