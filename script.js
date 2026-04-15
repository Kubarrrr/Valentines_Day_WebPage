window.addEventListener("load", (event) => {
    let loader = document.getElementById("loader");
    loader.style.display = "none";
  });


function loadNextPage() {
    window.location.href = "happyPage.html";
}

const phrases = ["No","Are you sure","RealIy sure?","Alara please","I'm gonna cry"];
let counter = 0;

function changePhrase() {
    let button = document.getElementsByClassName("heart")[1];
    if (counter <= 4) {
        button.textContent = phrases[counter];
        counter++;
    } else {
        window.location.href = "sadPage.html";
    }
}