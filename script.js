// ---------------------------------------------------------
// REQUISITO 1: Verificação Automatizada (MANTIDO)
// ---------------------------------------------------------
window.onload = function() {
    const ANO_LANCAMENTO = 2026;
    let anoAtual = new Date().getFullYear();
    if (anoAtual === ANO_LANCAMENTO) {
        alert("🎉 Seja bem-vindo! O jogo 'NyanPlay' foi lançado oficialmente este ano!");
    }
};

// ---------------------------------------------------------
// REQUISITO 2 e 3: Idade e Redirecionamento (NOVO)
// ---------------------------------------------------------
function verificarIdade() {
    let idadeDigitada = prompt("Para acessar o jogo NyanPlay, digite sua idade:");
    let idade = parseInt(idadeDigitada);
    let caixaJogo = document.getElementById("caixa-jogo");

    if (idade >= 18) {
        alert("Acesso Permitido! O jogo abrirá em uma nova aba para você jogar melhor.");
        
        // Remove o blur (cumpre a rubrica de manipular o DOM)
        caixaJogo.classList.remove("jogo-bloqueado");
        caixaJogo.classList.add("jogo-liberado");

        // Abre o jogo em uma nova aba para as setas não mexerem o site principal
        window.open('jogo/index.html', '_blank');
        
    } else {
        alert("Acesso Negado. O jogo possui restrições de idade.");
    }
}

// ---------------------------------------------------------
// REQUISITO 4: Feedback (MANTIDO)
// ---------------------------------------------------------
function enviarFeedback() {
    let opiniao = document.getElementById("input-opiniao").value;
    let mensagemExibicao = document.getElementById("mensagem-feedback");

    if (opiniao.trim() !== "") {
        mensagemExibicao.innerText = "Miau! 🐾 Recebemos seu feedback: '" + opiniao + "'.";
        document.getElementById("input-opiniao").value = "";
    } else {
        mensagemExibicao.innerText = "Por favor, digite alguma coisa.";
    }
}

// ---------------------------------------------------------
// REQUISITO 5: Tema (MANTIDO)
// ---------------------------------------------------------
const botaoTema = document.getElementById("btn-tema");
botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
    document.body.classList.toggle("tema-claro");
    botaoTema.innerText = document.body.classList.contains("tema-escuro") ? "Modo Claro" : "Modo Escuro";
});

// ---------------------------------------------------------
// LÓGICA DO MURAL (Com imagens locais e ID corrigido)
// ---------------------------------------------------------
const bancoDeBoasEnergias = [
    { imagem: "gatinho1.jpg", frase: "Você sobreviveu a mais um dia. Bom trabalho! 💖" },
    { imagem: "gatinho2.jpg", frase: "Um abraço virtual para espantar o estresse. 🤗" },
    { imagem: "gatinho3.jpg", frase: "Não esqueça de beber água e esticar as costas! 💧" },
    { imagem: "gatinho4.jpg", frase: "Fazer o seu melhor já é o suficiente. ⌨️" },
    { imagem: "gatinho5.jpg", frase: "Assim como os gatos, você merece descansar. 💤" }
];

function gerarLembrete() {
    let containerMural = document.getElementById("mural-fotos");
    let indiceSorteado = Math.floor(Math.random() * bancoDeBoasEnergias.length);
    let energiaEscolhida = bancoDeBoasEnergias[indiceSorteado];

    let novaPolaroid = document.createElement("div");
    novaPolaroid.classList.add("polaroid");

    let rotacao = Math.floor(Math.random() * 13) - 6;
    novaPolaroid.style.transform = "rotate(" + rotacao + "deg)";

    novaPolaroid.innerHTML = `
        <img src="${energiaEscolhida.imagem}" alt="Gatinho">
        <p>${energiaEscolhida.frase}</p>
    `;

    containerMural.prepend(novaPolaroid);
}