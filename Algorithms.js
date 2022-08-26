const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getLetter(n){ // Input: n a integer. Output: the corresponding letter in alphabet
    return Letters[n % 26]; 
}

function getNumber(a){
    i = 0;
    a_up = a.toUpperCase();
    while(a_up != Letters[i]){
        i++;
    }
    return i;
}

function str2num(str){
    num = [];
    for (let i = 0; i < str.length; i++) {
        num.push(getNumber(str[i]).toString());
    }
    return num; // 2-digits numbers
}

function num2str(num){
    str = '';
    for (let i = 0; i < num.length; i++) {
        str += getLetter(parseInt(num[i]));
    }
    return str;
}

function C_Vigenere(text, key){

    m = key.length;
    key_num = str2num(key);
    text_num = str2num(text);

    cifrado = '';

    for (let i = 0; i < text.length; i++) {
        ind = 26 + parseInt(text_num[i]) + parseInt(key_num[i % m]);
        cifrado += getLetter(ind); 
    }

    return cifrado;
}

function D_Vigenere(text, key){

    m = key.length;
    key_num = str2num(key);
    text_num = str2num(text);

    descifrado = '';

    for (let i = 0; i < text.length; i++) {
        ind = 26 + parseInt(text_num[i]) - parseInt(key_num[i % m]);
        descifrado += getLetter(ind); 
    }

    return descifrado;
}

// tests
// console.log("Funciona: ", C_Vigenere("HolaMuchoGusto", "Clave") == "JZLVQWNHJKWDTJ");
// console.log("Funciona: ", D_Vigenere(C_Vigenere("HolaMuchoGusto", "Clave"),"clave") == "HolaMuchoGusto".toUpperCase());