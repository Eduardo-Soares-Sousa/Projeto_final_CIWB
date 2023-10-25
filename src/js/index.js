const botoesCarrossel = document.querySelectorAll('.botao_carrossel');
const imagens = document.querySelectorAll('.imagem');

let imagemAtual = 0;

function atualizarBotoesCarrossel(){
    botoesCarrossel.forEach((botao, indice) => {
        botao.classList.toggle('ativo', indice === imagemAtual);
    });
}

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        if (indice === imagemAtual) return;

        desativarBotaoSelecionado();

        imagemAtual = indice;

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(imagemAtual);

        atualizarBotoesCarrossel();
    });
});

function mostrarImagemDeFundo(indice){
    imagens.forEach((imagem, i) => {
        if (i === indice) {
            imagem.classList.add('ativa');
        }
    });
}

function selecionarBotaoCarrossel(botao){
    botao.classList.add('selecionado');
}

function esconderImagemAtiva(){
    imagens.forEach(imagem => {
        imagem.classList.remove('ativa');
    });
}

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.botao_carrossel.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

function trocarImagem(){
    desativarBotaoSelecionado();
    esconderImagemAtiva();

    imagemAtual = (imagemAtual + 1) % imagens.length;

    selecionarBotaoCarrossel(botoesCarrossel[imagemAtual]);
    mostrarImagemDeFundo(imagemAtual);

    atualizarBotoesCarrossel();
}
setInterval(trocarImagem, 1000);

document.getElementById('menu-custom').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

/*
document.getElementById('menu-custom').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
*/