import React from "react";
import { Container, Row, Col } from "reactstrap";
import GameplayImage1 from "../../../assets/images/gameplay_1.webp";
import GameplayImage2 from "../../../assets/images/gameplay_2.webp";
import GameplayImage3 from "../../../assets/images/gameplay_3.webp";
import GameplayImage4 from "../../../assets/images/gameplay_4.webp";
import GameplayImage5 from "../../../assets/images/gameplay_5.webp";
import GameplayImage6 from "../../../assets/images/gameplay_6.webp";
import { getRandomMonsters } from "../../../utility/utility";

export default function Info() {
  return (
    <Container style={{ margin: "5% auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "5%",
        }}
      >
        <img
          src={GameplayImage1}
          alt="Gameplay Image 1"
          className="img-fluid"
          style={{
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            margin: "auto",
          }}
        />
        <img
          src={GameplayImage2}
          alt="Gameplay Image 2"
          className="img-fluid"
          style={{
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            margin: "auto",
          }}
        />
        <img
          src={GameplayImage3}
          alt="Gameplay Image 3"
          className="img-fluid"
          style={{
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            margin: "auto",
          }}
        />
      </div>
      <Row className="align-items-center">
        <Col xs={12} className="order-md-1">
          <h2>Breeding Mechanics</h2>
          <p>
            To get better monsters, you can mate them at the Shrine of Starry
            Night at the base of the Great Tree. This area is unlocked after you
            clear Class F Arena battle.
          </p>
          <h3>Conditions</h3>
          <ul>
            <li>
              Two parent monsters where one is male and the other is female
            </li>
            <li>Both parent monsters must at least be level 10</li>
            <li>Have at least 3 monsters in total</li>
          </ul>
          <p>
            The two parent monsters will leave and never return to your party
            but will leave behind an egg.
          </p>
          <p>
            The resulting offspring primarily depends upon family lineage or
            pedigree (the first monster you select), so you must be careful
            which monster you set as pedigree or partner (order matters). See
            breeding combination of each monster in the monster detail page.
          </p>
          <h3>+ Value</h3>
          <p>
            After you mate two monsters, you will see the offspring with
            something similar to '+1' by its name, which is referred to as the +
            value or + level.
          </p>
          <p>
            The + value affects status and the level cap of your monster. It is
            determined by the total level of the parent monsters noted in the
            following table and if the parents themselves have a + value.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Total Level</th>
                <th>+ Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20-39</td>
                <td>+1</td>
              </tr>
              <tr>
                <td>40-59</td>
                <td>+2</td>
              </tr>
              <tr>
                <td>60-75</td>
                <td>+3</td>
              </tr>
              <tr>
                <td>76-99</td>
                <td>+4</td>
              </tr>
              <tr>
                <td>above 100</td>
                <td>+5</td>
              </tr>
            </tbody>
          </table>
          <p>
            When two monsters that have a plus value are mated, the higher +
            value is added on to the total.
          </p>
          <p>
            e.g. if you have two monsters with +10 and +8 with a total level of
            over 100, the resulting offspring is +15. (10 + 5)
          </p>
          <h3>Level Cap Limit</h3>
          <p>
            Monsters that you recruit in the wild has a level cap limit. By
            breeding, you can increase the level cap limit of the offspring.
            Level cap limit is calculated by the following:
          </p>
          <p>(Plus value) x 2 + (monsters base level cap)</p>
          <p>
            e.g. Unicorn’s base level cap is 50 so a Unicorn +6 has a level cap
            of 62 (6 x 2 + 50).
          </p>
          <h3>Offspring stats parameter calculation</h3>
          <p>
            Resulting offspring monster stat (Attack, Defense, Agility,
            Intelligence) is determined by the following equation.
          </p>
          <p>
            ( pedigree parent monster stat + partner parent monster stat ) ÷ 4 +
            (offspring plus value)
          </p>
          <p>
            e.g. pedigree parent attack = 300 and partner parent attack = 500
            with the offspring +1 would have a attack value of 201 [(300+500) ÷
            4 + 1].
          </p>
          <h3>Skill Inheritance</h3>
          <p>
            A monster recruited in the wild usually only have the 3 skills
            listed in the monster detail page. However, a offspring can learn up
            to 8 different skills.
          </p>
          <p>
            The offspring monster can learn the 3 skills naturally learned by
            each parent monster, the 3 skills the offspring monster naturally
            learns, and any other skills the parent monsters do not naturally
            learn and was inherited from their parents at the time of mating.
          </p>
          <p>
            Any monster learning over 8 skills will have to 'forget' a skill to
            make room for any new skills.
          </p>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <img
          src={GameplayImage4}
          alt="Gameplay Image 4"
          className="img-fluid"
          style={{
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            margin: "auto",
          }}
        />
        <img
          src={GameplayImage5}
          alt="Gameplay Image 5"
          className="img-fluid"
          style={{
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            margin: "auto",
          }}
        />
        <img
          src={GameplayImage6}
          alt="Gameplay Image 6"
          className="img-fluid"
          style={{
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            margin: "auto",
          }}
        />
      </div>
    </Container>
  );
}
