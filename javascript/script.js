let btnProximo = document.getElementById("proximo");
let btnAnterior = document.getElementById("anterior");
let Quadroimagem = document.getElementById("imagem");

let album = [
    "src/foto 1",
    "src/foto 2", 
    "src/foto 3"
];

let foto = 0;

function mostrarProximo() {
    foto = foto + 1;
    if (foto >= album.length) {
        foto = 0;
    }
    Quadroimagem.src = album[foto];
}

btnProximo.addEventListener("click", mostrarProximo);

function mostrarAnterior() {
    foto = foto -1;
    if(foto < 0) {
        foto = album.length -1
    }
    Quadroimagem.src = album[foto];
}

btnAnterior.addEventListener("click", mostrarAnterior);