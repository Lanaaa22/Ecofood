function cadastro(event) {
    // Prevenir o envio do formulário
    event.preventDefault();
    
    // Recuperar valores dos campos
    const nome = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const cnpj = document.getElementById('cnpj').value;

    // Verificar se o CNPJ tem 14 caracteres
    if(cnpj.length === 14) {
        // Verificar se o nome, email e cnpj já existem no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('cnpj', cnpj);
        localStorage.setItem('logado', 'true')
        alert('CADASTRO FEITO COM SUCESSO!')
        window.location.href = 'index.html';
    } else {
        alert('CNPJ PRECISA TER 14 DIGITOS')
    }
}