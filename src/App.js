import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import CardPreviewBox from "./components/card-preview-box/card-preview-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [monsterTitle, setMonsterTitle] = useState(null);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onSelect = (monster) => {
    setSelectedMonsters((prevSelectedMonsters) =>
      prevSelectedMonsters.includes(monster)
        ? prevSelectedMonsters.filter((monsterId) => monsterId !== monster.id)
        : [...prevSelectedMonsters, monster]
    );
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setMonsters(user);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      />
      <CardPreviewBox selectedMonsters={selectedMonsters} onSelect={onSelect} />

      <CardList
        monsters={filteredMonsters}
        onSelect={onSelect}
        selectedMonsters={selectedMonsters}
      />
    </div>
  );
};

export default App;
