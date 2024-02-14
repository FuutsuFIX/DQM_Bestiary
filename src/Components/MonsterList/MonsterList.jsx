import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./MonsterList.module.css";
import { getMonsterImage, monsterDefaultImage } from "../../utility/utility";

export default function MonsterList() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://corsproxy.org/?https://dqmonstersdbapi-1-a1113227.deta.app/dqm1/monsters"
    )
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  const handleLinkClick = () => {
    setSearchTerm("");
  };

  const filteredMonsters =
    searchTerm === ""
      ? []
      : monsters.filter((monster) =>
          monster.new_name.toLowerCase().includes(searchTerm)
        );

  return (
    <div className={styles["monster-list-container"]}>
      <Input
        type="text"
        placeholder="What monster are you looking for?"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchTerm}
        className={styles["monster-search-input"]}
        style={{ width: "288px" }}
      />
      <div
        className={`${styles["monster-list"]} ${
          searchTerm ? styles["has-search-term"] : ""
        }`}
      >
        {filteredMonsters.length > 0 ? (
          filteredMonsters.map((monster) => (
            <Link
              key={monster.id}
              to={`/catalogue/${monster.id}`}
              onClick={handleLinkClick}
            >
              <div key={monster.id} className={styles["monster-list-item"]}>
                <img
                  src={getMonsterImage(monster.id, monster.new_name)}
                  onError={(event) => monsterDefaultImage(event)}
                  alt={monster.new_name}
                  className={styles["monster-image"]}
                />
                {monster.new_name}
              </div>
            </Link>
          ))
        ) : searchTerm ? (
          <div className={styles["no-results"]}>No results found</div>
        ) : null}
      </div>
    </div>
  );
}
