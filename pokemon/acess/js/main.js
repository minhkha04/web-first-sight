
const container = document.getElementById("container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const newSpan = document.createElement("span");

    newDiv.className = "item";
    newImg.src = `${baseUrl}${i}.png`;
    newSpan.innerText = `#${i}`;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSpan);
    container.appendChild(newDiv);

}