import React from "react";
import style from "./MonsterTable.module.css";
import { NavLink } from "react-router-dom";
import { getMonsterImage } from "../../utility/utility";

export default function MonsterTable(props) {
  const { monsterList } = props;

  const monsterTr = monsterList.map((monster) => {
    return (
      <tr key={monster.id}>
        <td>{monster.id}</td>
        <td className={style.monsterImage}>
          <img
            src={getMonsterImage(monster.id, monster.new_name)}
            alt={monster.new_name}
            loading="lazy"
          />
        </td>
        <td>{monster.new_name}</td>
        <td>{monster.family.family_eng}</td>
        <td>
          <NavLink className={style.action} to={`/catalogue/${monster.id}`}>
            Details
          </NavLink>
        </td>
      </tr>
    );
  });

  return (
    <table className={`table ${style.table}`}>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Family</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{monsterTr}</tbody>
    </table>
  );
}
