//Stores text a and button in variables
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "yellow", "green", "orange", "black", "blue", "hotpink"]; 
    changeColorButton.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)];
        textElement.style.color = randomColor; 
    }); 
}
changeTextColor();

const pictureElement = document.getElementById("toggle-image");
function changePicture(){
    const images = [
        "https://thumb.photo-ac.com/39/39e3899e8e0b909108fffb510120aa38_t.jpeg",
        "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
        "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"
    ];
    
    let currentIndex = 0; 
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        pictureElement.src = images[currentIndex];
    });
}

changePicture();