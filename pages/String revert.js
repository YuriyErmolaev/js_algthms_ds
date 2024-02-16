document.getElementById('mainContent').innerHTML = `
    <h1>Input</h1>
    <input type="text" id="inputText">
    <button onclick="revertString()">Revert</button>
    <h2>Output</h2>
    <div class="output"></div>
`;

function revertString() {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.querySelector('.output');
    outputDiv.textContent = inputText.split('').reverse().join('');
}
