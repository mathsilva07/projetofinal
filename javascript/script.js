let btnProximo = document.getElementById("proximo");
let btnAnterior = document.getElementById("anterior");
let Quadroimagem = document.getElementById("imagem");

let slider = [
    "images/zuri1.jpg", "images/zuri2.jpg"
]

let foto = 0;
//Função para avançar
function mostrarProximo() {
    // 1. Esconde a foto atual suavemente
    Quadroimagem.style.opacity = 0

    //2. espera 500 milissegundos
    setTimeout(function () {
        foto = foto + 1;
        if (foto >= slider.length) {
            foto = 0;
        }
        Quadroimagem.src = slider[foto];

        //3. revela a nova foto
        Quadroimagem.style.opacity = 1;
    }, 500);

}

btnProximo.addEventListener("click", mostrarProximo);

function mostrarAnterior() {
    // 1. Esconde a foto atual suavemente
    Quadroimagem.style.opacity = 0

    //2. espera 500 milissegundos
    setTimeout(function () {
        foto = foto - 1;
        if (foto < 0) {
            foto = slider.length - 1
        }
        Quadroimagem.src = slider[foto];
        Quadroimagem.style.opacity = 1;
    }, 500);

}


btnAnterior.addEventListener("click", mostrarAnterior);
setInterval(mostrarProximo, 4000);

