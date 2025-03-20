document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("button");
    button.addEventListener("click", change_paragraph);

    const url = "https://newsapi.org/v2/top-headlines?category=technology&apiKey=482e2b6e0ee34612876181a527e75ee9";

    uploadNews(url);

});

function change_paragraph(e) {

    const paragraph = document.getElementById("paragraph").value;
    document.getElementById("change").innerText = paragraph;

}

function uploadNews(url){

    fetch(url)
    .then(response => response.json())
    .then(data => {

        const news = document.getElementById("news_list");

        if (data.articles) {  
            data.articles.slice(0, 10).forEach(element => {
                const item = document.createElement("li");
                item.classList.add("list-item");
                item.textContent = element.title;

                item.innerHTML = ` <p></p>
                                   <strong> Title: ${element.title}</strong> <br>
                                   <p>${element.description || "Sin descripción disponible."}</p>
                                   <em>Source: ${element.source.name}</em> <br>
                                   <p></p>`;

                news.appendChild(item);
            });
        } else {
            news.innerHTML = "<li>No hay noticias disponibles.</li>";
        }
    })
}