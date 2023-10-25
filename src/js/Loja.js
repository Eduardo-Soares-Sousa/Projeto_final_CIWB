const produtos = [
    { imagem: 'imagem1.jpg', titulo: 'Action Figure - One Piece Lluffy gear5 17cm pvc', valor: 'R$ 276,23', descricaoProduct: 'Materiais:PVC - Pacote:Com caixa original - Tamanho:Aproximadamente 13cm - Edição:100% Genuine original O trabalho genuíno é mais delicado e os detalhes também são melhores - Embalagem método:Nós usamos a embalagem da caixa da espuma, podemos mais eficazmente proteger produtos, reduzimos extremamente dano, você pode descansar assegurado para comprar!'},

    { imagem: 'imagem2.jpg', titulo: 'Action Figure - Zoro Roronoa One Piece', valor: 'R$ 99,98', descricaoProduct: 'Material: PVC de alta qualidade - Inspirado em uma peça, da série de sucesso - Tamanho: 17cm - Não é Articulado - Devido à diferença de configuração de luz e tela, a cor dos itens pode ser ligeiramente diferente das fotos.'},

    { imagem: 'imagem3.jpg', titulo: 'FEITICEIRA NEGRA 21CM YU-GI-OH! - ACTION FIGURE', valor: 'R$ 249,90', descricaoProduct: 'Feiticeira Negra 21cm Yu-Gi-Oh! - Action Figure - Idade recomendada: Maior de 18 anos - Dimensões: 21cm - Material: PVC - Marca: Apaffa - Personagem: Feiticeira Negra do anime Yu-Gi-Oh! - Pacote: Action figure original, na caixa.'},

    { imagem: 'imagem4.jpg', titulo: 'Action figure - YU-GI-OH - MAGO NEGRO - DARK MAGICIAN', valor: 'R$ 900,00', descricaoProduct: 'O Action Figure Yu-Gi-Oh! Mago Negro é uma figura colecionável especial baseada no anime e jogo de cartas Yu-Gi-Oh!. Essa figura em particular retrata o personagem Mago Negro na forma do Duelista Yugi, o protagonista do anime.'},

    { imagem: 'imagem5.jpg', titulo: 'Caderno da Morte Death Note L Kira Near Ryuk + Colar Black', valor: 'R$ 24,99', descricaoProduct: 'O kit Acompanha:Death Note, Cordão - Dados de Cada Produto: Death Note - Medidas:- Altura: 20 Centímetros, Largura: 15 Centímetros, Número de Folhas: 50 ,Número de Páginas: 100 ,Número de Regras: 66. Capa: Feita com papel grosso, plastificada e resistente. Único com todos os nomes escritos pelo Kira no Anime! Cordão: Corrente Feito em Algodão encerado ultra resistente, pingente de metal, Dimensão da Corrente: 50cm aberta, 25cm fechada, Dimensão do Pingente: Entre 3 e 5 cm aproximadamente.'},

    { imagem: 'imagem6.jpg', titulo: 'Funko Pop! L com Bolo', valor: 'R$ 147,90', descricaoProduct: 'Figura colecionável produzida pela Funko - Importada dos Estados Unidos - Tamanho = 10 cm de altura - Material: Vinil - Lacrada na Caixa'},

    { imagem: 'imagem7.jpg', titulo: 'Action Figure Naruto Itachi Genjutsu Peça 26cm', valor: 'R$ 289,90', descricaoProduct: 'Peça Itachi Mandando Seu Poderoso Genjutsu - Escala de 26CM - PVC De Alta Qualidade e Riqueza de Detalhes - Ótima Opção Para A Coleção - Produto novo com caixa'},

    { imagem: 'imagem8.jpg', titulo: 'Action figure Demon Slayer - Tanjiro Kamado - 16cm', valor: 'R$ 197,90', descricaoProduct: 'Material: PVC - Tamanho aproximado: 16cm - Pintada a mão - Acompanha base - Produzida por Bandai. Produto inclui: 1x Action figure Demon Slayer - Tanjiro Kamado - 16cm'},

    { imagem: 'imagem9.jpg', titulo: 'Action figure - Demon Slayer - Mitsuri Kanroji - 21cm', valor: 'R$ 279,88', descricaoProduct: 'Produto novo, na caixa! - Material: PVC - Modelo: Demon Slayer - Tamanho: Aproximadamente 23cm.' },

    { imagem: 'imagem10.jpg', titulo: 'Action figure - Dragon Ball Super - Goku Black - 32cm', valor: 'R$ 316,70', descricaoProduct: 'Produto Novo! - Tamanho: 32 cm - Material: Pvc - Produto em estoque - Envio imediato.'},

    { imagem: 'imagem11.jpg', titulo: 'Action figure - Dragon Ball Super - Goku e Freeza - 15cm', valor: 'R$ 172,70', descricaoProduct: 'Produto Novo! - Inclui as 2 peças - Tamanho: 15 cm - Material: Pvc - Produto em estoque.'},

    { imagem: 'imagem12.jpg', titulo: 'Colar Akatsuki Símbolo Nuvem Vermelha Naruto', valor: 'R$ 19,99', descricaoProduct: 'Colar Símbolo da Akatsuki - Tamanho: 50cm - Material resistente - Multicolorido - Unissex.'},

    { imagem: 'imagem13.jpg', titulo: 'Funko POP: Demon Slayer- Tanjiro Kamado, Multicolor', valor: 'R$ 124,40', descricaoProduct: 'Figura colecionável produzida pela Funko - Importada dos Estados Unidos - Tamanho = 10 cm de altura - Material: Vinil - Lacrada na Caixa'},

    { imagem: 'imagem14.jpg', titulo: 'RYOMEN SUKUNA 13CM JUJUTSU KAISEN BANDAI - ACTION FIGURE', valor: 'R$ 799,00', descricaoProduct: 'Idade recomendada: Maior de 12 anos - Dimensões: 13cm - Material: PVC - Marca: BANDAI - Personagem: Ryomen Sukuna do anime Jujutsu Kaisen - Pacote: Action figure original, na caixa.'},

    { imagem: 'imagem15.jpg', titulo: 'Caneca Anime One Punch Man Saitama', valor: 'R$ 39,99', descricaoProduct: 'Capacidade: 325ml - Dimensões: 95mm x 80mm - Formato: Cilíndrico - Cuidados diários: Lavar com sabão neutro e lado macio da esponja. Não usar produtos abrasivos na limpeza. Pode ser levado ao micro-ondas por no máximo 3min. Tenha cuidado com quedas e impactos pois podem danificar a caneca.'},

    { imagem: 'imagem16.jpg', titulo: 'Quadro - Anime Attack on Titan - Com Moldura', valor: 'R$ 45,50', descricaoProduct: 'Tamanho: 42 cm de comprimento x 30 cm de largura - moldura forte rígida - lisa de perfeito acabamento - Possui moldura: Sim - Cor da moldura: Preto - Pronto para pendurar: Sim.'}
];

document.getElementById("itemCount").addEventListener("change", criarGaleria);

function criarGaleria() {
    const numeroItens = parseInt(document.getElementById("itemCount").value);
    const containerGaleria = document.getElementById("gridContainer");
    containerGaleria.innerHTML = "";

    for (let i = 0; i < numeroItens; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "grid-item";

        const imagem = document.createElement("img");
        imagem.src = produtos[i].imagem;

        const titulo = document.createElement("h2");
        titulo.textContent = produtos[i].titulo;

        const valor = document.createElement("p");
        valor.textContent = produtos[i].valor;

        const botaoDescricao = document.createElement("button");
        botaoDescricao.textContent = "Descrição";
        botaoDescricao.addEventListener("click", () => gerarDetalhes(i));

        itemDiv.appendChild(imagem);
        itemDiv.appendChild(titulo);
        itemDiv.appendChild(valor);
        itemDiv.appendChild(botaoDescricao);
        containerGaleria.appendChild(itemDiv);
    }
}

document.getElementById("pesquisa").addEventListener("input", pesquisarProdutos);

function pesquisarProdutos(){
    fecharDescricao();

    const searchInput = document.getElementById("pesquisa").value.toLowerCase();
    const containerGaleria = document.getElementById("gridContainer");

    for(let i = 0; i < produtos.length; i++){
        const itemDiv = containerGaleria.children[i];

        if (produtos[i].titulo.toLowerCase().includes(searchInput)) {
            itemDiv.style.display = "block";
        } else {
            itemDiv.style.display = "none";
        }
    }
}

function fecharDescricao() {
    const descricaoDiv = document.querySelector(".descricaoProduct");
    if (descricaoDiv) {
        descricaoDiv.remove();
    }
}

function gerarDetalhes(indice) {
    fecharDescricao();

    const containerGaleria = document.getElementById("gridContainer");
    const itemDiv = containerGaleria.children[indice];

    const descricaoDiv = document.createElement("div");
    descricaoDiv.className = "descricaoProduct";

    const descricaoParagrafo = document.createElement("p");
    descricaoParagrafo.textContent = produtos[indice].descricaoProduct;

    const botaoFechar = document.createElement("button");
    botaoFechar.textContent = "Fechar";
    botaoFechar.addEventListener("click", () => fecharDescricao());

    descricaoDiv.appendChild(descricaoParagrafo);
    descricaoDiv.appendChild(botaoFechar);
    itemDiv.appendChild(descricaoDiv);
}

// Inicialmente, crie a galeria com base na opção padrão.
criarGaleria();