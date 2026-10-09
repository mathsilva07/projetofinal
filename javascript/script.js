let btnProximo = document.getElementById("proximo");
let btnAnterior = document.getElementById("anterior");
let Quadroimagem = document.getElementById("imagem");

let slider = [
    "images/zuri1.jpg", "images/zuri2.jpg", "images/zuri3.jpg"
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

// --- LÓGICA DO CHECKOUT MODAL ---

// 1. Capturar os elementos do HTML
let botoesPlano = document.querySelectorAll(".btnplano");
let modal = document.getElementById("modal-checkout");
let btnFecharModal = document.getElementById("fechar-modal");
let textoPlanoEscolhido = document.getElementById("nome-plano-escolhido");

// 2. Criar um evento para cada botão da tabela de preços
botoesPlano.forEach(function(botao) {
    botao.addEventListener("click", function() {
        
        // O '.closest' garante que ele encontre a caixa exata do cartão, não importa o que aconteça
        let cartao = botao.closest(".card");
        
        // Procura o H1 dentro desse cartão específico e extrai APENAS o texto visível
        let tituloH1 = cartao.querySelector("h1");
        let nomeDoPlano = tituloH1.textContent; 
        
        // Injeta o nome correto (START, PRO ou PREMIUM) no modal
        textoPlanoEscolhido.textContent = nomeDoPlano;
        
        // Exibe a janela escura
        modal.style.display = "flex";
    });
});

// 3. Lógica para fechar a janela ao clicar no "X"
btnFecharModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// 4. Fechar a janela se o utilizador clicar fora dela (no fundo escuro)
window.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});