const botoesDeath = document.querySelectorAll(".botao-death");
const personagensDeath = document.querySelectorAll(".personagem-death");

botoesDeath.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerBotao();
        removerPersonagem();

        botao.classList.add("active");
        personagensDeath[indice].classList.add("active");
    });
});

function removerPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem-death.active");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("active");
    }
}

function removerBotao() {
    const botaoSelecionado = document.querySelector(".botao-death.active");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("active");
    }
}