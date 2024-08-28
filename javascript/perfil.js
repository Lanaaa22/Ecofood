document.addEventListener('DOMContentLoaded', function() {
    const mercado = document.getElementById('nome_mercado');
    const nome_email = document.getElementById('email');
    const nome_cnpj = document.getElementById('cnpj');
    const titulo = document.getElementById('titulo');
    const m = localStorage.getItem('nome');
    const e = localStorage.getItem('email')
    const c = localStorage.getItem('cnpj');
    const l = localStorage.getItem('lista_produtos')

    titulo.innerHTML = 'Olá, ' + m.toUpperCase();
    mercado.innerHTML = m;
    nome_email.innerHTML = e;
    nome_cnpj.innerHTML = c;

    
 
});

document.addEventListener('DOMContentLoaded', function() {
    // Recupera a lista de produtos do localStorage e a parseia como array
    const produtosJSON = localStorage.getItem('lista_produtos');
    const produtos = JSON.parse(produtosJSON) || [];

    // Seleciona o elemento select
    const select = document.getElementById('my-select');

    // Adiciona uma opção default se a lista estiver vazia
    if (produtos.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Nenhum produto disponível';
        select.appendChild(option);
    } else {
        // Adiciona as opções ao select
        produtos.forEach(produto => {
            const option = document.createElement('option');
            option.value = produto.nome; // Você pode usar qualquer propriedade do produto
            option.textContent = produto.nome; // Exibe o nome do produto
            select.appendChild(option);


        });
    }
});

function remover_produto(event) {
    event.preventDefault();
    
    // Obtém o nome do produto selecionado
    const nomeProdutoParaRemover = document.getElementById('my-select').value;
    
    // Recupera a lista de produtos do localStorage
    const produtosJSON = localStorage.getItem('lista_produtos');
    const produtos = JSON.parse(produtosJSON) || [];

    // Encontra o produto na lista pelo nome
    const produto = produtos.find(prod => prod.nome === nomeProdutoParaRemover);
    
    if (produto) {
        // Remove as informações do produto específico do localStorage
        localStorage.removeItem(produto.nome);
        localStorage.removeItem(produto.preco);
        localStorage.removeItem(produto.problema);
        localStorage.removeItem(produto.categoria);
        localStorage.removeItem(produto.supermercado);
        
        // Opcionalmente, remova o produto da lista de produtos e atualize o localStorage
        const novaListaProdutos = produtos.filter(prod => prod.nome !== nomeProdutoParaRemover);
        localStorage.setItem('lista_produtos', JSON.stringify(novaListaProdutos));
        alert('Produto removido com sucesso')
    } else {
        console.log("Produto não encontrado.");
    
    }
}

function remover_conta(event) {
    event.preventDefault();

    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('cnpj');
    localStorage.removeItem('logado')
    alert("Conta removida com sucesso!")
    window.location.href = "index.html";

}

function logout(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    alert('Logout feito com sucesso!')
    // Opcionalmente, redirecionar o usuário para a página de login
    window.location.href = 'index.html';
}