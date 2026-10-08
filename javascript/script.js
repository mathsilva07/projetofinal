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

// lógica do checkout modal

//1. Captura os elemntos do html
let botoesPlano = document.querySelectorAll(".btnplano"); /*captura todos os três botões*/
let modal = document.getElementById("modal-checkout");
let btnFecharModal = document.getElementById("fechar-modal");
let textoPlanoEscolhido = document.getElementById("nome-plano-escolhido");

botoesPlano.forEach(function (botao) {
    botao.addEventListener("click", function () {
        //encontra o nome do plano no Modal (h1) que está dentro do mesmo cartão do botão clicado
        let cartaoPai = botao.parentElement;
        let nomeDoPlano = cartaoPai.querySelectorAll("h1").innerText;

        //Escreve o nome do plano no modal e exibe a janela
        textoPlanoEscolhido.innerText = nomeDoPlano;
        modal.style.display = "flex";
    });

});

//3. Lógica para fechar a janela ao clicar no "X"*/
btnFecharModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// 4. (Extra profissional) Fechar a janela se o utilizador clicar fora dela (no fundo escuro)
window.addEventListener("click", function(evento) {
    if (evento.target == modal) {
        modal.style.display = "none"
    };  
});
