<script>
    // Pega a div diretamente pelo ID
    var fita = document.getElementById("meus-slides");
    
    var totalImagens = 3; // Colocamos o número 3 pois é a quantidade de imagens que você tem
    var index = 0;

    setInterval(function() {
        index++; // Soma 1 toda vez que roda
        
        // Se bater no limite de imagens, zera para voltar ao início
        if (index === totalImagens) {
            index = 0;
        }
        
        // Aplica o efeito visual de empurrar para o lado
        fita.style.transform = "translateX(" + (index * -100) + "%)";
        
    }, 3000); // 3000 milissegundos = 3 segundos
</script>