import "./card-preview.styles.css";

const CardPreviewBox = ({ selectedMonsters, onSelect }) => {
  const selectedMonsterPreviewList = selectedMonsters.map((i) => (
    <img
      key={i.id}
      src={`https://robohash.org/${i.id}?set=set2&size=90x90`}
      alt={`${i.name}`}
      onClick={() => onSelect(i.id)}
    />
  ));
  return (
    <div className="card-preview-box">
      {selectedMonsterPreviewList.map((item) => (
        <div key={item.key} className="card-container-preview">
          {item}
        </div>
      ))}
    </div>
  );
};

export default CardPreviewBox;
