// selectors
const image = document.querySelector("#imgLink");
const inputTopText = document.querySelector("#topText");
const inputBotText = document.querySelector("#botText");
const form = document.querySelector("form");
const memeSection = document.querySelector("section");

// function to create a meme
function createMeme(imgLink, topText, botText) {
    // div containing meme
    const newMeme = document.createElement("div");
    newMeme.setAttribute("class", "container");

    // top text
    const top = document.createElement("h1");
    top.textContent = inputTopText.value;
    top.setAttribute("class", "top-text");

    // bot text
    const bot = document.createElement("h1");
    bot.textContent = inputBotText.value;
    bot.setAttribute("class", "bottom-text");

    // meme img
    const img = document.createElement("img");
    img.setAttribute("src", image.value);

    // delete button
    const delButton = document.createElement('button');
    delButton.textContent = "X";
    delButton.setAttribute("class", "delete-button");
    delButton.addEventListener("click", deleteMeme);

    newMeme.append(delButton, img, top, bot);
    memeSection.append(newMeme);

    // clear form
    inputTopText.value = "";
    inputBotText.value = "";
    image.value = "";
}

// handler for deleting images
function deleteMeme(e) {
    e.target.parentElement.remove();
}

// form submission to insert meme in section
form.addEventListener("submit", function(e) {
    e.preventDefault();
    createMeme(image.value, inputTopText.value, inputBotText.value);
})
