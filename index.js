const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");
// const homePlusOne = document.getElementsByClassName("home-plus-one");
// const homePlusTwo = document.getElementsByClassName("home-plus-two");
// const homePlusThree = document.getElementsByClassName("home-plus-three");
// const awayPlusOne = document.getElementsByClassName("away-plus-one");
// const awayPlusTwo = document.getElementsByClassName("away-plus-two");
// const awayPlusThree = document.getElementsByClassName("away-plus-three");
const homeCard = document.getElementById("home-card")
const awayCard = document.getElementById("away-card")
let count = 0;
let countTwo = 0;
document.addEventListener("click", function(event){
    if (event.target.id === "home-plus-one") {
        count += 1
        homeScore.textContent = count
    } else if (event.target.id === "home-plus-two") {
        count += 2
        homeScore.textContent = count  
    } else if (event.target.id === "home-plus-three") {
        count += 3
        homeScore.textContent = count
    } else if (event.target.id === "away-plus-one") {
        countTwo += 1
        awayScore.textContent = countTwo
    } else if (event.target.id === "away-plus-two") {
        countTwo += 2
        awayScore.textContent = countTwo
    } else if(event.target.id === "away-plus-three") {
        countTwo += 3
        awayScore.textContent = countTwo
        }
    });

