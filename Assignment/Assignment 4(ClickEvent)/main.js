let submitButton = document.getElementById("submitButton");
let output = document.getElementById("outputDiv");
let nameValue = document.getElementById("nameInput");
let mouseTracker = document.getElementById("mouseTracker");
let mouseCoordinate = document.getElementById("coordinates");



submitButton.addEventListener("click", buttonClick);

// Click Events
function buttonClick(e){
    if(nameValue.value.trim() === ""){
    output.innerHTML = "<h3>Error: Please enter a name.</h3>"
    output.style.backgroundColor = "#FF0800";
    } else {
    output.innerHTML = "<h3>Welcome " + nameValue.value + "!</h3>"
    output.style.backgroundColor = "#3DED97";
    nameValue.value = "";
    }
};

// Mouse Events
mouseTracker.addEventListener("mousemove", function(e) {
    mouseCoordinate.innerHTML = "<h3> MouseX: " + e.offsetX + "</h3><h3> MouseY: " + e.offsetY + "</h3>"
});

//Keyboard Events
nameValue.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        buttonClick();
    }
});