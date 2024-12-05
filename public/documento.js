import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDoDocumento = document.getElementById("titulo-documento");

tituloDoDocumento.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({ 
        texto: textoEditor.value, 
        nomeDocumento 
    });
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto; 
}

export {atualizaTextoEditor};