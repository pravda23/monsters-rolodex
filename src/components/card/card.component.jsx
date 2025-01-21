import "./card.styles.css";

const Card = ({ monster, onSelect, isSelected }) => {
  const { name, email } = monster;

  const handleSelect = () => {
    onSelect(monster);
  };

  return (
    <div
      className={`card-container ${isSelected ? "selected" : ""}`}
      onClick={handleSelect}
    >
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <div className="card-details">
        <div className="name">{name}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

export default Card;
