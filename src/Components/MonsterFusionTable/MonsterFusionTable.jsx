import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { getMonsterImage, monsterDefaultImage } from "../../utility/utility";

export default function MonsterFusionTable({ fusionData }) {
  if (!fusionData) {
    return <div>No fusion data available</div>;
  }

  return (
    <div className="w-100">
      <h2>Monster Fusion Table</h2>
      <Table>
        <thead>
          <tr>
            <th>Pedigree 1</th>
            <th>Pedigree 2</th>
            <th>Child</th>
          </tr>
        </thead>
        <tbody>
          {fusionData.map((fusion) => (
            <tr key={fusion.id}>
              <td>
                {fusion.pedigree ? (
                  <Link to={`/catalogue/${fusion.pedigree.id}`}>
                    <img
                      src={getMonsterImage(
                        fusion.pedigree.id,
                        fusion.pedigree.new_name
                      )}
                      onError={(event) => monsterDefaultImage(event)}
                      alt={fusion.pedigree.new_name}
                      className="mr-2"
                      style={{
                        height: "64px",
                        width: "64px",
                        objectFit: "contain",
                        marginRight: "8px",
                      }}
                    />
                    {fusion.pedigree.new_name}
                  </Link>
                ) : fusion.pedigree_family ? (
                  fusion.pedigree_family.family_eng
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {fusion.parent2 ? (
                  <Link to={`/catalogue/${fusion.parent2.id}`}>
                    <img
                      src={getMonsterImage(
                        fusion.parent2.id,
                        fusion.parent2.new_name
                      )}
                      onError={(event) => monsterDefaultImage(event)}
                      alt={fusion.parent2.new_name}
                      className="mr-2"
                      style={{
                        height: "64px",
                        width: "64px",
                        objectFit: "contain",
                        marginRight: "8px",
                      }}
                    />
                    {fusion.parent2.new_name}
                  </Link>
                ) : fusion.family2 ? (
                  fusion.family2.family_eng
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <Link to={`/catalogue/${fusion.child.id}`}>
                  <img
                    src={getMonsterImage(
                      fusion.child.id,
                      fusion.child.new_name
                    )}
                    onError={(event) => monsterDefaultImage(event)}
                    alt={fusion.child.new_name}
                    className="mr-2"
                    style={{
                      height: "64px",
                      width: "64px",
                      objectFit: "contain",
                      marginRight: "8px",
                    }}
                  />
                  {fusion.child.new_name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
