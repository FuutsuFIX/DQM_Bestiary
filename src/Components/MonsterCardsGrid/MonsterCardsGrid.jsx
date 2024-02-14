import React, { useState, useEffect } from "react";
import MonsterCard from "../MonsterCard/MonsterCard";
import { getMonsterImage } from "../../utility/utility";
import { Spinner } from "reactstrap";
import styles from "./MonsterCardsGrid.module.css";

export default function MonsterCardsGrid(props) {
  const { monsterList, col } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const monsterCardsCol = monsterList.map((monster) => (
    <div key={monster.id} className="col">
      <MonsterCard
        new_name={monster.new_name}
        id={monster.id}
        image={getMonsterImage(monster.id, monster.new_name)}
        family={monster.family}
      ></MonsterCard>
    </div>
  ));

  return (
    <div>
      {isLoading ? (
        <div style={{ height: "100vh" }} className="text-center">
          <Spinner style={{ marginTop: "10%" }} color="primary" />
        </div>
      ) : (
        <div
          className={`row row-cols-${col.xs} row-cols-sm-${col.sm} row-cols-md-${col.md} row-cols-lg-${col.lg} row-cols-xl-${col.xl}`}
        >
          {monsterCardsCol}
        </div>
      )}
    </div>
  );
}
