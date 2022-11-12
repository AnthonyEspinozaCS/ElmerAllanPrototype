const navBarButton = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

navBarButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("block");
    navBarButton.classList.toggle("clicked");
    navBarButton.classList.toggle("border");
    navBarButton.classList.toggle("border-white");
    navBarButton.classList.toggle("rounded-lg");
    navBarButton.classList.toggle("bg-black-custom");
});