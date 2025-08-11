const frases = [
    "Todo es culpa del punto y coma.",
    "Si no funciona, apaga y prende de nuevo.",
    "Ojo con el ctrl z en el liveshare."
];

function mostrarFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').textContent = frase;
}

function enviarFormulario(event) {
    event.preventDefault();
    alert("Gracias por registrarte. No te vamos a escribir nunca.");
}
