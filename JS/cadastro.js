const nomeCompleto = document.querySelector('.nome-usuario')
const emailCadastro = document.querySelector('.email-cadastro')
const senhaCadastro = document.querySelector('.senha-cadastro')
const confirmarSenha = document.querySelector('.confirmar-senha')
const botãoCadastro = document.querySelector('.button-cadastro')

const sheets = 'https://script.google.com/macros/s/AKfycbwf7HQ3aCrsPlIgjfMGPGegmEfFsm1_3bHjSEwFT2oJjHikPqjfLi0IQhVLrLwzB5vW5Q/exec';

function Cadastro(event) {
    event.preventDefault();

    const nome = nomeCompleto.value;
    const email = emailCadastro.value;
    const senha = senhaCadastro.value;
    const senhaConfirmada = confirmarSenha.value

    if(senha === senhaConfirmada) {
        const dados = new URLSearchParams();
        dados.append('nome', nome);
        dados.append('email', email);
        dados.append('senha', senha);

        fetch(sheets, {
            method: 'POST', 
            body: dados,
            mode: 'no-cors'
        })
        .then(() => {
            alert('Usuário Cadastrado!')
        })
        .catch(error => console.error('Erro', error));
    } else {
        alert('Senha diferentes!')
    }
}

botãoCadastro.addEventListener('click', Cadastro)