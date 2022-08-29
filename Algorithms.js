function gcd(m, n){
    
    var gcd; 

    while(true){
        gcd = m % n;
        if(gcd == 0){
            return n;
        }
        m = n;
        n = gcd;
    }
}
function Inv_mod(a, m = 26){

    let m0 = m;
    let y = 0;
    let x = 1;
 
    if (m == 1)
        return 0;
 
    while (a > 1)
    { 
        // q is quotient
        let q = parseInt(a / m);
        let t = m;
 
        // m is remainder now,
        // process same as
        // Euclid's algo
        m = a % m;
        a = t;
        t = y;
 
        // Update y and x
        y = x - q * y;
        x = t;
    }
 
    // Make x positive
    if (x < 0){
        x += m0;
    }
    return x;
}

function Mul_Mat(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }

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

// Esto sobra pero lo pongo porque se puede mejorar
function C_Cesar(text, key){
    return C_Vigenere(text, key)
}
function D_Cesar(text, key){
    return D_Vigenere(text, key)
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

function C_Afin(text, key){ // Asumimos que la clave es como ["m", "d"]
    
    var a = str2num(key[0]);
    var b = str2num(key[1]);

    //if ( gcd(a, 26) != 1){
    //    alert("Contraseña no válida"); // Acá se supone que el profe quiere que sugiramos una clave.
    //}

    var text_num = str2num(text);

    var cifrado = '';

    const size = text.length;

    for (let i = 0; i < size; i++) {
        var ind = 26 + parseInt(a) * parseInt(text_num[i]) + parseInt(b);
        cifrado += getLetter(ind); 
    }

    return cifrado;

}
function D_Afin(text, key){ // Asumimos que la clave es como ["m", "d"]
    
    var a = str2num(key[0]);
    var b = str2num(key[1]);

    //if ( gcd(a, 26) != 1){
    //    alert("Contraseña no válida"); // Acá se supone que el profe quiere que sugiramos una clave.
    //}

    var text_num = str2num(text);

    var decifrado = '';

    const size = text.length;

    var ia = Inv_mod(a)

    for (let i = 0; i < size; i++) {
        var ind = 26 + parseInt(ia) *( parseInt(text_num[i]) - parseInt(b));
        decifrado += getLetter(ind); 
    }

    return decifrado;

}

function C_Hill(text, key){
    
    m = key.length;

}




console.log(A);

// tests
// console.log("Funciona: ", C_Vigenere("HolaMuchoGusto", "Clave") == "JZLVQWNHJKWDTJ");
// console.log("Funciona: ", D_Vigenere(C_Vigenere("HolaMuchoGusto", "Clave"),"clave") == "HolaMuchoGusto".toUpperCase());
// console.log(C_Afin("abcde", ["c", "b"]));
// Para el decifrado afín solo es saber calcular el inverso módulo 26
// console.log( D_Afin( C_Afin( "abcde" , ["h", "a"]), ["h", "a"]) );

// A = Mul_Mat(

//     [
//      [2,3],
//      [4,1]
//     ],
//     [
//      [1,3],
//      [3,1]
//     ],
// )