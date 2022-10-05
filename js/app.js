document.addEventListener("DOMContentLoaded", e => {

    let questions1 = document.querySelector(".questions:nth-child(1)");
    questions1.addEventListener("click", () => {
        togglePannel1 = document.querySelector(".toggle-pannel");
        togglePannel1.classList.toggle("active");
    })
    let questions2 = document.querySelector(".questions:nth-child(2)");
    questions2.addEventListener("click", () => {
        togglePannel2 = document.querySelector(".toggle-pannel");
        togglePannel2.classList.toggle("active");
    })
});