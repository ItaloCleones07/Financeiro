const email = document.querySelector('.input-email')
const senha = document.querySelector('.input-senha')
const botãoEntrar = document.querySelector('#button-entrar')
const erro = document.querySelector('.Erro')

function Entrar() {
    if (email.value === localStorage.getItem('email') && (senha.value === (localStorage.getItem('senha')))) {
        alert('Funcionou')
    } else {
        erro.innerHTML = 'Email ou senha incorretos!'
    }
}

botãoEntrar.addEventListener('click', Entrar);