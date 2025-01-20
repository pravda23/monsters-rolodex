import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters, onSelect, selectedMonsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
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
);

export default CardList;
