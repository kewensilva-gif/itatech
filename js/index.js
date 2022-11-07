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

let consoles = {
    7: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    8: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    9: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    10: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    11: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    12: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    }
}

let diversos = {
    13: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    14: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    15: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    16: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    17: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    },
    18: {
        nome: "Nome do produto",
        preco: "R$50,00",
        link: "Ver produto"
    }
}

const produtos = document.querySelectorAll(".products-all")

function createProducts(key, section, object){
    const conteudo = document.createElement("div");
    const imagem = document.createElement("img");
    const nome = document.createElement("h3");
    const preco = document.createElement("p");
    const link = document.createElement("a");

    conteudo.classList.add("conteudo-produto");
    conteudo.classList.add("conteudo-produto");

    imagem.setAttribute("src", `../img/produto${key}.png`);
    nome.innerText = object[key].nome;
    preco.innerText = object[key].preco;
    link.innerText = object[key].link;
    link.setAttribute("href", object[key].link);

    conteudo.appendChild(imagem);
    conteudo.appendChild(nome);
    conteudo.appendChild(preco);
    conteudo.appendChild(link);

    produtos[section].appendChild(conteudo);
}

Object.keys(starWars).map((key)=>{
    createProducts(key, 0, starWars);
})

Object.keys(consoles).map((key)=>{
    createProducts(key, 1, consoles);
})

Object.keys(diversos).map((key)=>{
    createProducts(key, 2, diversos);
})