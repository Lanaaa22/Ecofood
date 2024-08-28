function login(event) {
        event.preventDefault();

    const email = document.getElementById('email').value;
    const cnpj = document.getElementById('cnpj').value;

    if(email === localStorage.getItem('email') && cnpj == localStorage.getItem('cnpj')) {
        alert('LOGIN REALIZADO COM SUCESSO!');
        localStorage.setItem('logado', 'true');
        localStorage.setItem('token', 'true');
        window.location.href = 'index.html';
    } else {
        alert('algum dado está errado!')
    }  
}