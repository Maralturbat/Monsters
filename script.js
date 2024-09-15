let currentDoor = { sully: null, randall: null };

document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");

    for (let i = 0; i < 9; i++) {
        const door = document.createElement("div");
        door.id = i.toString();
        door.addEventListener("click", selectDoor);
        board.appendChild(door);
    }

    setInterval(() => setCharacter("sully"), 1500); // 1.5 seconds
    setInterval(() => setCharacter("randall"), 2000); // 2 seconds
});

const setCharacter = (character) => {
    const randomDoor = getRandomDoor();
    if (isDoorOccupied(randomDoor)) return;
    const door = document.getElementById(randomDoor);
    const img = document.createElement("img");
    img.src = `./images/${character}.png`;
    door.appendChild(img);
    currentDoor[character] = door;
    setTimeout(() => clearDoor(character), 1000); // 1 second
};

const isDoorOccupied = (randomDoor) =>
    currentDoor.sully?.id === randomDoor ||
    currentDoor.randall?.id === randomDoor;

const clearDoor = (character) => {
    if (currentDoor[character]) currentDoor[character].innerHTML = "";
};

const selectDoor = (e) => {
    console.log(e.target);
    if (e.target.children.length === 0) {
        console.log("door is empty");
    }
};

const getRandomDoor = () => Math.floor(Math.random() * 9).toString();
