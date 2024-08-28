document.addEventListener('DOMContentLoaded', function() {
    // Recupera o array de produtos armazenado no localStorage, ou cria um array vazio se não existir
    let produtos = JSON.parse(localStorage.getItem('lista_produtos')) || [];

    // Recupera os valores armazenados no localStorage para o novo produto
    let nProduto = localStorage.getItem('nome_produto');
    let pProduto = localStorage.getItem('preco');
    let gpProduto = localStorage.getItem('problema');
    let nCategoria = localStorage.getItem('categoria')
    let nomeSupermercado = localStorage.getItem('nome');

    if (nProduto && pProduto && gpProduto) {
        // Cria o novo objeto de produto
        let novoProduto = {
            nome: nProduto,
            preco: pProduto,
            problema: gpProduto,
            supermercado: nomeSupermercado,
            categoria: nCategoria
        };

        // Adiciona o novo produto ao array de produtos
        produtos.push(novoProduto);

        // Atualiza o localStorage com o array de produtos atualizado, convertendo-o para uma string JSON
        localStorage.setItem('lista_produtos', JSON.stringify(produtos));

        // Remove os itens específicos do localStorage
        localStorage.removeItem('nome_produto');
        localStorage.removeItem('preco');
        localStorage.removeItem('problema');
        localStorage.removeItem('categoria');
    }

    // Seleciona o contêiner onde os produtos serão exibidos
    const produtosContainer = document.querySelector('.produtos');

    // Limpa o contêiner para garantir que não haja produtos duplicados
    produtosContainer.innerHTML = '';

    // Cria e adiciona elementos HTML para cada produto
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('section');
        produtoDiv.classList.add('produto');

        produtoDiv.innerHTML = `
            <p class="supermercado"><b>Supermercado:</b> ${produto.supermercado}</p>
            <p id="titulo" class="titulo">${produto.nome}</p>
            <p id="preco" class="preco"><b>R$${produto.preco}</b></p>
            <p id="problema" class="problema">${produto.problema}</p>
            <p id="categoria" class="categoria">${produto.categoria}</p>
        `;

        // Adiciona o produto ao contêiner
        produtosContainer.appendChild(produtoDiv);
    });


});
