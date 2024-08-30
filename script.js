const URL = 'https://api.potterdb.com/v1/books';

const formPesquisa = document.querySelector("form")

formPesquisa.onsubmit = (Event) => {Event.preventDefault();

const pesquisa = Event.target.pesquisa.value;

if (pesquisa == "") {
    alert ('Preencha o Campo!');
    return;
}

fetch('https://api.potterdb.com/v1/books').then(result => result.json()).then(json => carregaLista(json));

const carregaLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";
    if (!json.Response == 'False') {
        alert('Nenhum Livro encontrado');
        return;
    }
    json.Search.forEach(element => {
        let item = document.createElement("div")
        item.classList.add("item");
        item.innerHTML = `<img src="${element.book}" /><h2>${element.attributes}</h2>`
        listItem.innerHTML = `
                <img src="${cover.image}" alt="${title.title}">
                <h2>${author.title}</h2>
                <p>${summary.description}</p>
                <div class="score">Score: ${book.rt_score}</div>
            `;
        lista.appendChild(item);
    });
}
}