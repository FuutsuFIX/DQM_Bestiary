import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMonsterImage, monsterDefaultImage } from "../../../utility/utility";
import style from "./MonsterDetail.module.css";
import MonsterFusionTable from "../../MonsterFusionTable/MonsterFusionTable";

function MonsterDetail() {
  const { number } = useParams();
  const id = number ? parseInt(number) : null;
  const [monsterData, setMonsterData] = useState(null);
  const [fusionData, setFusionData] = useState(null);

  useEffect(() => {
    if (id !== null && !isNaN(id)) {
      fetch(
        `https://corsproxy.org/?https://dqmonstersdbapi-1-a1113227.deta.app/dqm1/monstersandskill/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMonsterData(data);
        })
        .catch((error) => {
          console.error("Error fetching monster data:", error);
        });

      fetch(
        `https://corsproxy.org/?https://dqmonstersdbapi-1-a1113227.deta.app/dqm1/breeding/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setFusionData(data);
        })
        .catch((error) => {
          console.error("Error fetching fusion data:", error);
        });

      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!monsterData) {
    return <div className="container text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col d-flex justify-content-between">
          <div className="d-inline-block">
            {id > 1 && (
              <Link
                to={`/catalogue/${id - 1}`}
                className={`${style["prev-button"]}`}
              >
                Previous Monster
              </Link>
            )}
          </div>
          <div className="d-inline-block">
            {id < 215 && (
              <Link
                to={`/catalogue/${id + 1}`}
                className={`${style["next-button"]}`}
              >
                Next Monster
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={getMonsterImage(id, monsterData.new_name)}
            onError={(event) => monsterDefaultImage(event)}
            alt={monsterData.new_name}
            className={`${style["monster-image"]}`}
          />
        </div>
        <div className="col-md-8">
          <h1>{monsterData.new_name}</h1>
          <p>Family: {monsterData.family.family_eng}</p>
          <h2>Description</h2>
          <p>{monsterData.description}</p>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col">
          <h2>Skills</h2>
          <ul>
            {monsterData.skills.map((skill) => (
              <li key={skill.id}>
                <strong>{skill.new_name}</strong>
                <p>{skill.description}</p>
                <p>Category: {skill.category_type}</p>
                <p>Family type: {skill.family_type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <MonsterFusionTable fusionData={fusionData} />
        </div>
      </div>
    </div>
  );
}

export default MonsterDetail;
