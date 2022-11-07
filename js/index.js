let starWars = {
    1: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    2: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    3: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    4: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    5: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    6: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    }
}

const produtos = document.querySelectorAll(".products-all")

function createProducts(key, section){
    const conteudo = document.createElement("div");
    const imagem = document.createElement("img");
    const nome = document.createElement("h3");
    const preco = document.createElement("p");
    const link = document.createElement("a");

    conteudo.classList.add("conteudo-produto");
    conteudo.classList.add("conteudo-produto");

    imagem.setAttribute("src", `../img/produto${key}.png`);
    nome.innerText = starWars[key].nome;
    preco.innerText = starWars[key].preco;
    link.innerText = starWars[key].link;

    conteudo.appendChild(imagem);
    conteudo.appendChild(nome);
    conteudo.appendChild(preco);
    conteudo.appendChild(link);

    produtos[section].appendChild(conteudo);
}

Object.keys(starWars).map((key)=>{
    createProducts(key, 0);
})