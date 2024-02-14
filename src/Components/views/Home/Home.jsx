import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import HomeImage from "../../../assets/images/home_1.png";
import Terry from "../../../assets/images/terry.png";
import MonsterCard from "../../MonsterCard/MonsterCard.jsx";
import { getRandomMonsters } from "../../../utility/utility";

export default function Home() {
  const [randomMonsters, setRandomMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      fetch(
        "https://corsproxy.org/?https://dqmonstersdbapi-1-a1113227.deta.app/dqm1/monsters"
      )
        .then((response) => response.json())
        .then((data) => {
          const randomMonsters = getRandomMonsters(data, 3);
          setRandomMonsters(randomMonsters);
        })
        .catch((error) =>
          console.error("Errore durante il recupero dei dati:", error)
        );
    }
  }, [isLoading]);

  return (
    <Container style={{ marginTop: "5%" }}>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="order-md-1">
          <img src={HomeImage} alt="Immagine" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="order-md-2">
          <h2>Embark on an Enchanting Journey with Dragon Quest Monsters!</h2>
          <p>
            Step into the magical realm of Dragon Quest Monsters and experience
            an unforgettable adventure alongside Terry and Milly, two young
            heroes determined to save the world from the forces of evil. In the
            first installment of the series, face off against the dangerous
            Warubou and the mysterious Watabou on an epic quest to free Milly
            from their wicked grasp. With a gripping plot focusing on the bond
            between brother and sister and the friendship with extraordinary
            creatures, Dragon Quest Monsters will catapult you into a thrilling
            journey through unknown lands and extraordinary adventures.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="order-md-2">
          <img src={Terry} alt="Immagine" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          <h2>Train and Battle with Your Loyal Allies!</h2>
          <p>
            Experience compelling and innovative gameplay that blends the epic
            world of Dragon Quest with the exciting mechanic of monster
            capturing and training. As Terry, you'll need to recruit and train a
            wide range of creatures, each with unique abilities and magical
            powers. Traverse dangerous dungeons, challenge other trainers in the
            Monster Arena, and uncover hidden secrets as you collect Tiny Medals
            and power up your army of allies. With a deep and engaging growth
            system and the ability to breed monsters to create even more
            powerful breeds, Dragon Quest Monsters offers a captivating gaming
            experience that will keep you glued to the screen for hours.
          </p>
        </Col>
      </Row>
      <Row>
        <h2>Some of the monsters you cand find:</h2>
        {isLoading ? (
          <Col xs={12} className="text-center">
            <Spinner style={{ margin: "10% 0" }} color="primary" />
          </Col>
        ) : (
          randomMonsters.map((monster, index) => (
            <Col key={index} xs={12} md={4}>
              <MonsterCard
                new_name={monster.new_name}
                id={monster.id}
                family={monster.family}
                image={monster.image}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
