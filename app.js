// Función para encriptar texto
function encryptText() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encryptedText;
}

// Función para desencriptar texto
function decryptText() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decryptedText;
}

// Función para copiar texto al portapapeles
function copyText() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}