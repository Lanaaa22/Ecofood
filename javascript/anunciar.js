function anunciar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const problema = document.getElementById('problema').value;
    const categoria = document.getElementById('categoria').value;

    localStorage.setItem('nome_produto', nome);
    localStorage.setItem('preco', preco);
    localStorage.setItem('problema', problema);
    localStorage.setItem('categoria', categoria);
    alert('Anuncio do produto '+nome+' feito com sucesso')
}

