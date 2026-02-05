const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const photo = document.getElementById("photo");

noButton.addEventListener("mouseover", () => {
    const x = Math.random() * 300;
    const y = Math.random() * 100;
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

yesButton.addEventListener("click", () => {
    photo.style.display = "block";
});
