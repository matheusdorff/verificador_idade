function verificarIdade() {
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');


    const mensagem = idade >= 18 ? 'Você é maior de idade.' : 'você não é maior de idade.';
    resultado.textContent = mensagem
}