import React, { useState } from "react";
import "./card.styles.css";

const Card = ({ monster, onSelect, isSelected }) => {
  const { id, name, email } = monster;

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
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
