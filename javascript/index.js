document.addEventListener('DOMContentLoaded', function() {
    const logado = localStorage.getItem('logado');
    const token = localStorage.getItem('token');
    const anuncio = document.getElementById('anuncio');
    const login = document.getElementById('login');
    const perfil = document.getElementById('perfil');

    if(logado !== 'true' || token !== 'true') {
        anuncio.style.display = 'none';
        perfil.style.display = 'none';
    } else {
        login.style.display = 'none'
        perfil.style.display = 'block';
    }
});