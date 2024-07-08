const entradaTexto = document.querySelector(".decodificador__esquerdo-texto");
const resultadoCriptografia = document.querySelector(
  ".decodificador__direito-titulo"
);

const botaoCriptografa = document.querySelector(
  ".decodificador__esquerdo-botao-esquerdo"
);
const botaoDescriptografa = document.querySelector(
  ".decodificador__esquerdo-botao-direito"
);
const botaoCopiar = document.querySelector(".decodificador__direito-botao");

const imagem = document.querySelector(".decodificador__direito-imagem");

const paragrafo = document.querySelector(".decodificador__direito-paragrafo");

const element = document.querySelector(".decodificador__direito-titulo");

resultadoCriptografia.value = "Nenhuma mensagem encontrada";

var textoCriptografado,
  textoDescriptografado = "";

function criptografaTexto() {
  textoCriptografado = trocaLetras(entradaTexto.value.toLowerCase());

  limpaArea();
  resultadoCriptografia.value = textoCriptografado;
  imagem.remove();
  paragrafo.remove();
  element.classList.remove("decodificador__direito-titulo");
  element.classList.add("decodificador__direito-titulo-hidden");
}

function descriptografaTexto() {
  textoDescriptografado = retornaLetras(entradaTexto.value);

  limpaArea();
  resultadoCriptografia.value = textoDescriptografado;
  element.classList.remove("decodificador__direito-titulo");
  element.classList.add("decodificador__direito-titulo-hidden");
}

function trocaLetras(textoOriginal) {
  return textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function retornaLetras(palavraCriptografada) {
  return palavraCriptografada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function limpaArea() {
  textoOriginal = "";
  entradaTexto.value = "";
}

function copiaResultado() {
  resultadoCriptografia.select();
  document.execCommand("copy");
}

botaoCriptografa.onclick = criptografaTexto;
botaoDescriptografa.onclick = descriptografaTexto;
botaoCopiar.onclick = copiaResultado;
