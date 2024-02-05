// src/components/MonsterList.js
import React, { useState, useEffect } from "react";
import "./MonsterList.css"; // Assicurati di avere questo file CSS

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Cerca per nome del mostro..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

function MonsterList() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://dqmonstersdbapi-1-a1113227.deta.app/dqm1/monsters"
    )
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  const filteredMonsters =
    searchTerm === ""
      ? []
      : monsters.filter((monster) =>
          monster.new_name.toLowerCase().includes(searchTerm)
        );

  return (
    <div className="monster-list-container">
      <SearchBar onSearch={handleSearch} />
      <div className={`monster-list ${searchTerm ? "has-search-term" : ""}`}>
        {filteredMonsters.length > 0
          ? filteredMonsters.map((monster) => (
              <div key={monster.id} className="monster-list-item">
                <img
                  src={`src/assets/images/monsters/${monster.new_name.replace(
                    / /g,
                    "_"
                  )}.png`}
                  alt={monster.new_name}
                  className="monster-image"
                />
                {monster.new_name}
              </div>
            ))
          : searchTerm && (
              <div className="no-results">Nessun risultato trovato</div>
            )}
      </div>
    </div>
  );
}

export default MonsterList;
