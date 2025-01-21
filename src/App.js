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

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onSelect = (id) => {
    setSelectedMonsters((prevSelectedMonsters) =>
      prevSelectedMonsters.includes(id)
        ? prevSelectedMonsters.filter((monsterId) => monsterId !== id)
        : [...prevSelectedMonsters, id]
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
      <div className="top-frame">
        <CardPreviewBox
          selectedMonsters={selectedMonsters}
          onSelect={onSelect}
        />

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search monsters"}
          className={"monsters-search-box"}
        />
      </div>
      <div className="bottom-frame">
        <div className="scrollable-content">
          <CardList
            monsters={filteredMonsters}
            onSelect={onSelect}
            selectedMonsters={selectedMonsters}
          />
        </div>
      </div>
      <footer className="footer">
        <p>
          Created by <a href="">me</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
