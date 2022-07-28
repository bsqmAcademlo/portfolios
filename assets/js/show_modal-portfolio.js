const seePortfolio = document.querySelectorAll(".portfolio__info > svg");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal_close");

modal_close.addEventListener("click", () => {
    modal.classList.toggle("modal_show");
});

seePortfolio.forEach((see) => {
    see.addEventListener("click", (element) => {
        const img_modal = document.querySelector("#img_modal");
        const urlimg = element.currentTarget.id;

        modal.classList.toggle("modal_show");
        img_modal.src = urlimg;
    });
});
