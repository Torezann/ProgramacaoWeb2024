let produtos = [];

function criarProduto(id, nome, qtd) {
    return { id, nome, qtd };
}

function adicionarProduto(produto) {
    produtos.push(produto);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter(produto => produto.id !== id);
}

function encontrarProduto(id) {
    return produtos.find(produto => produto.id === id);
}

function editarQuantidade(id, novaQuantidade) {
    let produto = encontrarProduto(id);
    if (produto) {
        produto.qtd = novaQuantidade;
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarQuantidade,
};
