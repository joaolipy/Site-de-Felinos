// 1. MANIPULAÇÃO DE DADOS ESTÁTICOS
const NOME_JOGO = "Nyan Cat: Em Busca do Templo";
const DESENVOLVEDOR = "IndiePlay";
const COLETAVEL_PRINCIPAL = "Peixes Azuis";
const HEROI = "Nyan Cat";
const ANO_LANCAMENTO = 2026;

// Injetando dados
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("game-title").innerText = NOME_JOGO;
    document.getElementById("game-info").innerText = 
        `Ajude o ${HEROI} a coletar ${COLETAVEL_PRINCIPAL}!`;
});

// 7. VERIFICAÇÃO AUTOMATIZADA DE LANÇAMENTO
const anoAtual = new Date().getFullYear();
if (anoAtual === ANO_LANCAMENTO) {
    alert(`🎉 JOGUE AGORA! ${NOME_JOGO} foi lançado oficialmente este ano (${ANO_LANCAMENTO})!`);
}

// 2. ENTRADA DE DADOS PROMPT & 3. DECISÃO
window.onload = function() {
    // Prompt para confirmar a idade
    let idade = prompt(`Olá! Para jogar as fases do Templo Maia, precisamos confirmar sua idade:`);
    
    let container = document.getElementById("game-container");
    let aviso = document.getElementById("aviso-idade");

    if (idade !== null && parseInt(idade) >= 18) {
        alert("Acesso Autorizado! Você pode clicar e jogar o jogo imediatamente.");
        aviso.innerText = "Acesso Livre: Pode dar play!";
        aviso.classList.add("liberado");
        
        // 4. MANIPULAÇÃO VIA DOM (Tira o blur e ativa a caixa de jogo)
        container.classList.remove("borrado");
        container.classList.add("liberado");
    } else {
        alert("Acesso Negado. O jogo possui restrições de idade e continuará bloqueado.");
        aviso.innerText = "Bloqueado: Restrito para menores de 18 anos.";
    }
};

// 5. INTERATIVIDADE COM INPUT DE TEXTO
function enviarNome() {
    let nome = document.getElementById("nome-jogador").value;
    let saudacao = document.getElementById("mensagem-saudacao");

    if (nome.trim() !== "") {
        saudacao.innerText = `Pronto, ${nome}! Seus Peixes Azuis serão salvos na sua conta!`;
    } else {
        saudacao.innerText = "Por favor, digite seu nome primeiro!";
    }
}

// 6. ALTERNÂNCIA DE TEMA (Light/Dark Mode)
const btnTema = document.getElementById("theme-btn");

btnTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnTema.innerText = "Mudar para Modo Campo (Claro)";
    } else {
        btnTema.innerText = "Mudar para Modo Templo (Escuro)";
    }
});
// =====================================================================
// INTERAÇÃO DA LOJA DE GIFS FOfos
// =====================================================================
function desbloquearGif(idBotao, idImagem, urlDoGif) {
    let botao = document.getElementById(idBotao);
    let imagem = document.getElementById(idImagem);

    // Se já foi comprado, não faz nada
    if (botao.classList.contains("comprado")) {
        return; 
    }

    // Alerta fofo
    alert("Miau! 🐾 6 peixinhos azuis foram gastos. Aproveite o seu novo vídeo fofo!");

    // Troca a imagem da caixa surpresa pelo GIF fofo
    imagem.style.opacity = 0; // Efeito de piscar
    setTimeout(() => {
        imagem.src = urlDoGif;
        imagem.style.opacity = 1;
    }, 200);

    // Muda o botão para mostrar que já é dela
    botao.innerText = "Desbloqueado! 💖";
    botao.classList.add("comprado");
}