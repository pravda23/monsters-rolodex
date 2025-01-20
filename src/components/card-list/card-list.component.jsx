import Card from "../card/card.component";
import CardPreviewBox from "../card-preview-box/card-preview-box.component";
import "./card-list.styles.css";

const CardList = ({ monsters, onSelect, selectedMonsters }) => (
  <>
    {/* <CardPreviewBox selectedMonsters={selectedMonsters} onSelect={onSelect} /> */}
    <div className="card-list">
      {monsters.map((monster) => {
        console.log(selectedMonsters);
        return (
          <Card
            monster={monster}
            key={monster.id}
            onSelect={onSelect}
            isSelected={selectedMonsters.includes(monster.id)}
          />
        );
      })}
    </div>
  </>
);

export default CardList;
