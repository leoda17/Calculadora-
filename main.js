let history = [];

function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        // Aqui usamos uma verificação mais segura para a expressão
        const result = safeEval(display.value);
        history.push(`${display.value} = ${result}`);
        display.value = result;
        updateHistory();
    } catch (error) {
        display.value = 'Erro';
    }
}

function safeEval(expression) {
    // Verificar se a expressão está vazia ou inválida
    if (!expression || /[^0-9+\-*/().^ ]/g.test(expression)) {
        throw new Error('Entrada inválida');
    }

    // Tentar calcular com a função Function() para evitar o uso de eval()
    try {
        // A função 'Function' executa uma expressão de forma segura
        return new Function('return ' + expression)();
    } catch (error) {
        throw new Error('Erro ao calcular');
    }
}

function updateHistory() {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
}

function clearHistory() {
    history = [];
    updateHistory();
}
