function validarFormulario() {
    const numeroA = parseFloat(document.querySelector('#formulário input[placeholder="Número A"]').value);
    const numeroB = parseFloat(document.querySelector('#formulário input[placeholder="Número B"]').value);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert('Por favor, insira números válidos nos campos.');
        return false; // Impede o envio do formulário
    }

    if (numeroB > numeroA) {
        alert('Formulário válido! Número B é maior que o número A.');
        return true; // Permite o envio do formulário
    } else {
        alert('Formulário inválido! Número B deve ser maior que o número A.');
        return false; // Impede o envio do formulário
    }
}