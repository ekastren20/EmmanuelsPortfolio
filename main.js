document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel_ _nav">
        ${buttonsHtml.join("")}    
    </div>
    `);
 
    const buttons = carousel.querySelectorAll(".carousel__buttons");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");   

        });
    });
});