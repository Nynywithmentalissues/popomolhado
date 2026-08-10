const produtos = {
    product1: {
        nome: "Malbec",
        descricao: "O perfume Malbec Club Intenso é o mais marcante e possui uma fragrância amadeirada.",
        preco: "R$ 67,67",
        imagem: "img/perfume1.webp",
        

    },
    product2: {
        nome: "Perfume de Lavanda",
        descricao: "Perfume suave com fragrância de lavanda.",
        preco: "R$ 59,90",
        imagem: "img/perfume2.webp",

    },

    product3: {
        nome: "Perfume de Cereja",
        descricao: "Perfume com uma fragrância marcante de cereja.",
        preco: "R$ 69,90",
        imagem: "img/perfume3.webp",

    },

    product4: {
        nome: "Essência Encanto Noturno",
        descricao: "Uma fragrância marcante com notas de baunilha, frutas vermelhas e um toque suave de jasmim.",
        preco: "R$ 74,90",
        imagem: "img/perfume4.webp",

    },

    product5: {
        nome: "Perfume Aurora Floral",
        descricao: "Fragrância delicada e refrescante com leves notas de rosas, lavanda e um toque cítrico.",
        preco: "R$ 62,90",
        imagem: "img/perfume5.webp",

    },

    product6: {
        nome: "Perfume Mistério de Âmbar",
        descricao: "Uma combinação envolvente de âmbar, madeira e baunilha para uma fragrância elegante e intensa.",
        preco: "R$ 89,90",
        imagem: "img/perfume6.webp",

    },

    product7: {
        nome: "Perfume Jardim de Cerejas",
        descricao: "Aroma doce e frutado de cerejas maduras combinado com notas suaves de flores e caramelo.",
        preco: "R$ 57,90",
        imagem: "img/perfume7.webp",

    },

    product8: {
        nome: "Perfume Brisa Tropical",
        descricao: "Uma fragrância leve e refrescante com notas de coco, frutas tropicais e um toque de baunilha.",
        preco: "R$ 68,90",
        imagem: "img/perfume8.webp",

    },

    product9: {
        nome: "Perfume Noite de Lavanda",
        descricao: "Fragrância sofisticada com lavanda, musk e notas amadeiradas que deixam um aroma suave e duradouro.",
        preco: "R$ 79,90",
        imagem: "img/perfume9.webp",

    }
}

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id");

const produto = produtos[id];

if (produto) {

    document.getElementById("name").textContent = produto.nome;

    document.getElementById("description").textContent =
        produto.descricao;

    document.getElementById("price").textContent =
        produto.preco;

    document.getElementById("img").src =
        produto.imagem;

    document.getElementById("img").alt =
        produto.nome;

    document.getElementById("img").clientWidth =
        produto.width;

    document.getElementById("img").clientHeight =
        produto.height;

}

const buttonclicked = document.getElementById("buy-btn");

buttonclicked.addEventListener("click", function() {
    alert(`VOCÊ COMPROU: ${produto.nome}, POR: ${produto.preco}`);
});
