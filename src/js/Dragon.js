const botoesDragon = document.querySelectorAll(".botao-dragon");
const personagensDragon = document.querySelectorAll(".personagem-dragon");

botoesDragon.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        retirarBotao();
        retirarPersonagem();

        botao.classList.add("ok");
        personagensDragon[indice].classList.add("ok");
    });
});

function retirarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem-dragon.ok");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("ok");
    }
}

function retirarBotao() {
    const botaoSelecionado = document.querySelector(".botao-dragon.ok");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("ok");
    }
}