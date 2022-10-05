document.addEventListener("DOMContentLoaded", e => {

    let questions = document.querySelector(".questions");

    questions.forEach(element => {
        
        element.addEventListener("click", (event) => {
        togglePannel = document.querySelector(".toggle-pannel");
        togglePannel.classList.toggle("active");
    })
});


});