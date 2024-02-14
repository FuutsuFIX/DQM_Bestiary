import React, { useState, useEffect } from "react";
import MonsterCard from "../../MonsterCard/MonsterCard";
import MonsterCardsGrid from "../../MonsterCardsGrid/MonsterCardsGrid";
import MonsterTable from "../../MonsterTable/MonsterTable";
import style from "./Catalogue.module.css";
import clsx from "clsx";

export default function Catalogue() {
  const [displayGrid, setDisplayGrid] = useState("true");

  const [monsterListData, setMonsterList] = useState([]);

  useEffect(() => {
    fetch(
      "https://corsproxy.org/?https://dqmonstersdbapi-1-a1113227.deta.app/dqm1/monsters"
    )
      .then((response) => response.json())
      .then((data) => setMonsterList(data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className={style.switch}>
            <div
              className={clsx(style.option, { [style.active]: displayGrid })}
              onClick={() => setDisplayGrid(true)}
            >
              Grid
            </div>
            <div
              className={clsx(style.option, { [style.active]: !displayGrid })}
              onClick={() => setDisplayGrid(false)}
            >
              Table
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          {displayGrid ? (
            <MonsterCardsGrid
              monsterList={monsterListData}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          ) : (
            <MonsterTable monsterList={monsterListData} />
          )}
        </div>
      </div>
    </div>
  );
}
