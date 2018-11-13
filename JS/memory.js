function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function aboutUs() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("aboutGame").style.display = "block";
}
document.getElementsByClassName("card").addEventListener("click", flipCard)

function flipCard(){
    document.getElementsByClassName("card").style.display = "none";
}