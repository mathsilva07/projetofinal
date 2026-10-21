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


// FAQ ---

// 1. Capturar todos os botões de pergunta
let perguntasFaq = document.querySelectorAll(".faq-pergunta");

// 2. Para cada botão, vamos adicionar um "ouvinte" de clique
perguntasFaq.forEach(function(botao) {
    botao.addEventListener("click", function() {
        
        // Alterna a classe 'ativa' neste botão específico (faz a seta girar)
        this.classList.toggle("ativa");
        
        // Pega o elemento exato que está logo abaixo do botão no HTML (a div faq-resposta)
        let resposta = this.nextElementSibling;
        
        // A Mágica da Animação:
        // Se a resposta já tiver uma altura definida, significa que está aberta. Então, fechamos.
        if (resposta.style.maxHeight) {
            resposta.style.maxHeight = null;
        } else {
            // Se estiver fechada, calculamos a altura exata do texto dentro dela e abrimos!
            resposta.style.maxHeight = resposta.scrollHeight + "px";
        }
    });
});

function mudarTema(nomeDoTema) {
    document.body.className = "";

    if(nomeDoTema === 'noturno') {
        document.body.classList.add('tema-noturno');
    } else if (nomeDoTema === 'claro') {
        document.body.classList.add('tema-claro');
    }
}

// --- LÓGICA DO SELETOR DE TEMAS ---
function mudarTema(nomeDoTema) {
    // 1. Limpa todas as classes atuais (remove o tema anterior)
    document.body.className = "";
    
    // 2. Adiciona a nova cor dinamicamente
    if (nomeDoTema !== 'padrao') {
        document.body.classList.add('tema-' + nomeDoTema);
    }

    // 3. NOVO: Salva o nome do tema na memória do navegador
    localStorage.setItem('zuriTemaSalvo', nomeDoTema);
}

document.addEventListener('DOMContentLoaded', function() {
    // Busca a informação na memória
    let temaGuardado = localStorage.getItem('zuriTemaSalvo');
    
    // Se existir algum tema guardado na memória, ativa-o
    if (temaGuardado) {
        mudarTema(temaGuardado);
    }
});