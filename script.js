document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("button");
    button.addEventListener("click", change_paragraph);

});

function change_paragraph(e){
    const paragraph = document.getElementById("paragraph").value;
    document.getElementById("change").innerText = paragraph;
};