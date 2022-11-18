const readMoreBtn = document.querySelector("button.read-more");
const text = document.getElementById("text-" + readMoreBtn.id);

readMoreBtn.addEventListener("click", () => {
    text.classList.toggle("hidden");
    text.classList.toggle("block");
});