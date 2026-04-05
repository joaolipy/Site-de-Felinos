// ---------------------------------------------------------
// REQUISITO 1: Verificação Automatizada de Lançamento
// ---------------------------------------------------------
window.onload = function() {
    const ANO_LANCAMENTO = 2026;
    let anoAtual = new Date().getFullYear();

    if (anoAtual === ANO_LANCAMENTO) {
        alert("🎉 Seja bem-vindo! O jogo 'Nyan Cat: Em Busca do Templo' foi lançado oficialmente este ano!");
    }
};

// ---------------------------------------------------------
// REQUISITO 2 e 3: Decisão (if/else) e Manipulação de Visibilidade via DOM (Blur)
// ---------------------------------------------------------
function verificarIdade() {
    let idadeDigitada = prompt("Para acessar o Templo Maia, digite sua idade:");
    let idade = parseInt(idadeDigitada);
    let caixaJogo = document.getElementById("caixa-jogo");

    if (idade >= 18) {
        alert("Acesso Permitido! O jogo foi desbloqueado, divirta-se.");
        caixaJogo.classList.remove("jogo-bloqueado");
        caixaJogo.classList.add("jogo-liberado");
    } else {
        alert("Acesso Negado. O jogo possui restrições de idade para as armadilhas do templo.");
    }
}

// ---------------------------------------------------------
// REQUISITO 4: Interatividade com Input de Texto (Feedback)
// ---------------------------------------------------------
function enviarFeedback() {
    let opiniao = document.getElementById("input-opiniao").value;
    let mensagemExibicao = document.getElementById("mensagem-feedback");

    if (opiniao.trim() !== "") {
        mensagemExibicao.innerText = "Miau! 🐾 Recebemos seu feedback: '" + opiniao + "'. Muito obrigado!";
        document.getElementById("input-opiniao").value = "";
    } else {
        mensagemExibicao.innerText = "Por favor, digite alguma coisa antes de enviar.";
    }
}

// ---------------------------------------------------------
// REQUISITO 5: Alternância de Tema (Light/Dark Mode)
// ---------------------------------------------------------
const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.innerText = "Modo Claro";
    } else {
        botaoTema.innerText = "Modo Escuro";
    }
});

// ---------------------------------------------------------
// EXTRA: Lógica da Loja Fofa (Abrir GIFs)
// ---------------------------------------------------------
// =========================================================
// INTEGRAÇÃO COM O JOGO (Recebendo os Pontos do Construct)
// =========================================================
let meusPeixinhos = 0; // Variável que guarda o saldo real

// Fica "escutando" as mensagens que vêm do jogo no iframe
window.addEventListener("message", function(evento) {
    // Verifica se a mensagem tem o formato que configuramos no Construct
    if (evento.data && evento.data.tipo === 'pontos') {
        meusPeixinhos = evento.data.valor; // Atualiza o saldo
        document.getElementById("qtd-peixes").innerText = meusPeixinhos; // Atualiza na tela
    }
});

// =========================================================
// LÓGICA DA LOJA FOFA (Comprando e Mostrando a Imagem)
// =========================================================
function desbloquearGif(idBotao, idImagem, urlDoGif) {
    let botao = document.getElementById(idBotao);
    let imagem = document.getElementById(idImagem);

    // Se a pessoa já comprou, a função para aqui (não faz nada)
    if (botao.classList.contains("comprado")) { 
        return; 
    }

    // VERIFICA O SALDO: Custa 6 peixinhos
    let preco = 6;

    if (meusPeixinhos >= preco) {
        // Se tem peixes suficientes, debita do saldo!
        meusPeixinhos = meusPeixinhos - preco;
        document.getElementById("qtd-peixes").innerText = meusPeixinhos;

        alert("🐾 Compra realizada! Você abriu uma caixa surpresa!");

        // COMO A IMAGEM APARECE:
        // 1. Deixamos a caixa surpresa invisível (opacity 0)
        imagem.style.opacity = 0; 
        
        // 2. Esperamos um pouquinho (300 milissegundos) e trocamos o link da imagem para o GIF fofo
        setTimeout(() => {
            imagem.src = urlDoGif;
            // 3. Fazemos o GIF fofo aparecer suavemente (opacity 1) e dar um pulinho (scale)
            imagem.style.opacity = 1;
            imagem.style.transform = "scale(1.05)";
        }, 300);

        // Atualiza o botão para mostrar que já é dela
        botao.innerText = "Desbloqueado! 💖";
        botao.classList.add("comprado");

    } else {
        // Se NÃO tem peixes suficientes
        let faltam = preco - meusPeixinhos;
        alert("Miau! Faltam " + faltam + " peixinhos. Jogue mais para conseguir!");
    }
}