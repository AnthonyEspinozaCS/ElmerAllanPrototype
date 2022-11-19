/* readMoreBtn.addEventListener("click", () => {
    text.classList.toggle("hidden");
    text.classList.toggle("block");
}); */

function more(person){
    let personText = document.querySelector(`.${person}-text`);
    let btnText = document.querySelector(`.read-more-${person}`);

    personText.classList.toggle("hidden");
    personText.classList.toggle("block");
    if(btnText.textContent === "Read More")
        btnText.textContent = "Read Less";
    else
        btnText.textContent = "Read More";
}