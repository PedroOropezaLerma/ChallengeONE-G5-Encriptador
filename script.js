//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textAreaIn = document.querySelector('#textoaencriptar');
const btnEncrypt = document.querySelector('#encriptar');
const btnDecrypt = document.querySelector('#desencriptar');
const textOut = document.querySelector('#texencriptado');
const btnCopy = document.querySelector('#copiar');
const searchLogo = document.querySelector('.searchLogo');
const pResult = document.querySelector('.textoencriptado');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const pTheme = document.querySelector('.theme');


function Encriptar(textoaencriptar){
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    // let textOut = document.getElementById('textOut');
    // textLower = textLower.split('');
    let textencrypt = '';

    if (textLower == '') {
        alert('Por favor ingrese el texto a encriptar');
    } else {
        for (let i = 0; i < textLower.length; i++) {
            if (textLower[i] == 'a' || textLower[i] == 'á') {
                textencrypt = textencrypt + 'ai';
            } else if (textLower[i] == 'e' || textLower[i] == 'é') {
                textencrypt = textencrypt + 'enter';
            } else if (textLower[i] == 'i' || textLower[i] == 'í') {
                textencrypt = textencrypt + 'imes';
            } else if (textLower[i] == 'o' || textLower[i] == 'ó') {
                textencrypt = textencrypt + 'ober';
            } else if (textLower[i] == 'u' || textLower[i] == 'ú') {
                textencrypt = textencrypt + 'ufat';
            } else {
                textencrypt = textencrypt + textLower[i];
            }
        }
        searchLogo.style.display = 'none';
        pResult.style.display = 'none';
        textOut.removeAttribute('hidden');
        textOut.innerText = textencrypt;
    }
}

function Desencriptar(textoencriptado){
    const textIn = textAreaIn.value;
    let textLower = textIn.toLowerCase();
    let i = 0;
    let textencrypt = '';

    if (textLower == '') {
        alert('Por favor ingrese el texto a encriptar');
    } else {
        while (i < textLower.length) {
            // for (let i = 0; i < textLower.length; i++) {
            if (textLower[i] == 'a' && textLower[i+1]=='i') {
                textencrypt = textencrypt + 'a';
                i += 2;
            } else if (textLower[i] == 'e' && textLower[i+1]=='n') {
                textencrypt = textencrypt + 'e';
                i += 5;
            } else if (textLower[i] == 'i' && textLower[i+1]=='m') {
                textencrypt = textencrypt + 'i';
                i += 4;
            } else if (textLower[i] == 'o' && textLower[i+1]=='b') {
                textencrypt = textencrypt + 'o';
                i += 4;
            } else if (textLower[i] == 'u' && textLower[i+1]=='f') {
                textencrypt = textencrypt + 'u';
                i += 4;
                console.log('o: ', i);
            } else {
                textencrypt = textencrypt + textLower[i];
                i += 1;
            }

            // if (i > textLower.length) {
            //     console.log(i);
            //     break;
            // }
        }
        searchLogo.style.display = 'none';
        pResult.style.display = 'none';
        textOut.removeAttribute('hidden');
        textOut.innerText = textencrypt;
    }
}

function Copiar(){
    var content = textOut.value;
    navigator.clipboard.writeText(content);
}

btnEncrypt.addEventListener('click', Encriptar);
btnDecrypt.addEventListener('click', Desencriptar);
btnCopy.addEventListener('click', Copiar);