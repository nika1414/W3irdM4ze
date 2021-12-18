const description = document.querySelector(".description");
const game = document.querySelector(".game");
const masterDiv = document.querySelector(".masterDiv");

function Start() {
  description.style.display = "flex";
  game.style.display = "flex";
  masterDiv.style.display = "none";
}

//maze levels
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");

//diff messages
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

//end game
const scaryPic = document.querySelector(".scary-pic");
const goodEnd = document.querySelector(".goodEnd");

//when collision happens
const shejaxeba = (value) => {
  if (value === "maze-border") alert("You lost try again..");
  if (value === "finish") {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "Finish This one as well";
  }
  if (value === "finish1") {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
    uiLevel.textContent = "Level 3";
    uiMessage.textContent = "Last One.. You got This";
  }
  if (value === "end-game") {
    goodEnd.play();
    scaryPic.style.display = "block";
    document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  //finding where the mouse cursor is first..
  console.log(e.target.classList.value);
  let check = e.target.classList.value;
  shejaxeba(check);
});
