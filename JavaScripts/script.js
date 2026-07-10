const scrollButtons = document.querySelectorAll("[data-scroll-target]");

scrollButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const target = document.querySelector(button.dataset.scrollTarget);

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});
