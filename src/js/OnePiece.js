const botoesOne = document.querySelectorAll(".botao-one");
const personagensOne = document.querySelectorAll(".personagem-one");

botoesOne.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        excluirBotao();
        excluirPersonagem();

        botao.classList.add("ativo");
        personagensOne[indice].classList.add("ativo");
    });
});

function excluirPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem-one.ativo");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("ativo");
    }
}

function excluirBotao() {
    const botaoSelecionado = document.querySelector(".botao-one.ativo");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("ativo");
    }
}
