import Unknown from "../assets/images/unknown_data.png";

export const getMonsterImage = (id, name) => {
    if (name) {
        return `https://raw.githubusercontent.com/FuutsuFIX/DQM_Bestiary/main/src/assets/images/monsters/${name.replace(/ /g, "_")}.png`;
    } else {

        return '/src/assets/images/unknown_data.png';

    }
};

export function getRandomMonsters(monstersArray, numberOfMonsters) {
    const shuffledMonsters = monstersArray.sort(() => 0.5 - Math.random());
    return shuffledMonsters.slice(0, numberOfMonsters);
}


export const monsterDefaultImage = (onErrorEvent) => onErrorEvent.target.src = Unknown;