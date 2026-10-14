const hexElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", 
    "E", "F"];
    
const color = document.querySelector(".color");
const button = document.getElementById("button"); 

button.addEventListener("click", getHexColor);


function getHexColor()
{
    let hexColor = "#";
    for (let i = 0; i < 6; i++)
    {
        hexColor += hexElements[Math.floor(Math.random() * 16)];
    }
    color.textContent= hexColor;
    document.body.style.backgroundColor = hexColor;
}
