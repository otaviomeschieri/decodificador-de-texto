const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

document.getElementById("div-aparece").style.display = 'none';

//Encriptar o texto
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
    aparece();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

//Desencriptar o texto
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none";
    aparece();
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar() {
    const copiaTexto = document.querySelector(".mensagem");
    copiaTexto.select();
    navigator.clipboard.writeText(copiaTexto.value);
    copiaTexto.value = "";
}

function aparece() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block';
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var btnTema = document.querySelector(".btn-dark-mode");
    var imgTema = document.querySelector(".icone");

    var trocaTexto = document.querySelector(".btn-dark-mode");
    if ((trocaTexto.innerHTML === "Tema escuro") && (imgTema.src = "./imagens/dark-mode.svg")) {
        trocaTexto.innerHTML = "Tema claro";
        imgTema.src = "./imagens/light-mode.svg";
    } else {
        trocaTexto.innerHTML = "Tema escuro";
        imgTema.src = "./imagens/dark-mode.svg";
    }

}