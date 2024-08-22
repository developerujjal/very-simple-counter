let counter = 0;
function increaseCounter() {
    let counterElement = document.getElementById("counter");
    counter += 1;
    counterElement.innerText = counter;
}


document.getElementById("decrease-btn").addEventListener("click", function () {
    let counterElement = document.getElementById("counter");
    counter -= 1;
    if (counter >= 0) {
        counterElement.innerText = counter;
    }

})