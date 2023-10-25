const botoesYuGi = document.querySelectorAll(".botao-yugioh");
const personagensYuGi = document.querySelectorAll(".personagem-yugioh");

botoesYuGi.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        tirarBotao();
        tirarPersonagem();

        botao.classList.add("select");
        personagensYuGi[indice].classList.add("select");
    });
});

function tirarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem-yugioh.select");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("select");
    }
}

function tirarBotao() {
    const botaoSelecionado = document.querySelector(".botao-yugioh.select");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("select");
    }
}

/*
const botoesYuGi = document.querySelectorAll(".botao-yugioh");
const personagensYuGi = document.querySelectorAll(".personagem-yugioh");

botoesYuGi.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		tirarBotao();
		tirarPersonagem();

		botao.classList.add("select");
		personagens[indice].classList.add("select");
	});
});

function tirarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem-yugioh.select");
	personagemSelecionado.classList.remove("select");
}

function tirarBotao() {
	const botaoSelecionado = document.querySelector(".botao-yugioh.select");
	botaoSelecionado.classList.remove("select");
}
*/