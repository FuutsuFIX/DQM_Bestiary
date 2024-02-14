import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import style from "./MonsterCard.module.css";
import { getMonsterImage, monsterDefaultImage } from "../../utility/utility";
import { NavLink } from "react-router-dom";

export default function MonsterCard(props) {
  const { new_name, id, family, image } = props;

  return (
    <NavLink to={`/catalogue/${id}`} className={style["link-no-decoration"]}>
      <Card className={style.card}>
        <CardImg
          onError={(event) => monsterDefaultImage(event)}
          loading="lazy"
          className={style.image}
          top
          width="100%"
          src={getMonsterImage(id, new_name)}
          alt={new_name}
        />
        <CardBody className="text-center">
          <CardTitle tag="h5" className={`h3 ${style.title}`}>
            {new_name}
          </CardTitle>
          <CardText>Family: {family.family_eng}</CardText>
          <CardText>Monster ID: {id}</CardText>
        </CardBody>
      </Card>
    </NavLink>
  );
}
