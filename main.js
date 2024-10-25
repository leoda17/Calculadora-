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
        const result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        display.value = result;
        updateHistory();
    } catch (error) {
        display.value = 'Erro';
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
