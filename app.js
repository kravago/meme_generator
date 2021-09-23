// selectors
const image = document.querySelector("#imgLink");
const inputTopText = document.querySelector("#topText");
const inputBotText = document.querySelector("#botText");
const form = document.querySelector("form");
const memeSection = document.querySelector("section");

// function to create a meme
function createMeme(imgLink, topText, botText) {
    const newMeme = document.createElement("div");
    newMeme.setAttribute("class", "container");

    const top = document.createElement("h1");
    top.textContent = inputTopText.value;
    top.setAttribute("class", "top-text");

    const bot = document.createElement("h1");
    bot.textContent = inputBotText.value;
    bot.setAttribute("class", "bottom-text");

    const img = document.createElement("img");
    img.setAttribute("src", image.value);

    newMeme.append(img, top, bot);
    memeSection.append(newMeme);

    // clear form
    inputTopText.value = "";
    inputBotText.value = "";
    image.value = "";
}

// form submission to insert meme in section
form.addEventListener("submit", function(e) {
    e.preventDefault();

    createMeme(image.value, inputTopText.value, inputBotText.value);
})


