// Function to prompt user to type their name and display it in an HTML element
function welcome() {
    var name = prompt("Enter your name in the box:","Kaitlyn")

    var welcometext = document.getElementById("user")
    if (name === null || name === "") {
        welcometext.innerHTML = "Welcome to my website!"
    } else {
        welcometext.innerHTML = "Welcome to my website, "+name+"!";
    }
}
// Function to enlarge image on click
function enlargeImage() {
    var image = document.getElementById("myImage");
    image.style.width = "200px"; 
}
// Function to restore original image size
function restoreImage() {
    var image = document.getElementById("myImage");
    image.style.width = "100px"; 
}
// Function to handle mouseover event for navigation items
function handleMouseOver(element) {
    element.style.color = "white"; 
}
// Function to handle mouseout event for navigation items
function handleMouseOut(element) {
    element.style.color = "black"; 
}
