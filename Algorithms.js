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

const modularMultiplicativeInverse = (a, modulus) => {
    // Calculate current value of a mod modulus
    const b = BigInt(a % modulus);
      
      // We brute force the search for the smaller hipothesis, as we know that the number must exist between the current given modulus and 1
      for (let hipothesis = 1n; hipothesis <= modulus; hipothesis++) {
          if ((b * hipothesis) % modulus == 1n) return hipothesis;
      }
        // If we do not find it, we return 1
      return 1n;
  }

  const solveCRT = (remainders, modules) => {
    // Multiply all the modulus
    const prod = modules.reduce((acc, val) => acc * val, 1n);
    
    return modules.reduce((sum, mod, index) => {
        // Find the modular multiplicative inverse and calculate the sum
    // SUM( remainder * productOfAllModulus/modulus * MMI ) (mod productOfAllModulus) 
        const p = prod / mod;
        return sum + (remainders[index] * modularMultiplicativeInverse(p, mod) * p);
    }, 0n) % prod;
}

function S_CRT(re, mo){
    var a = solveCRT(re, mo)
    
    return parseInt(a)
}

// x mod 5 = 1
// x mod 59 = 13
// x mod 24 = 7
const remainders  = [1, 13, 7].map(BigInt)
const modules = [5, 59, 24].map(BigInt)

// console.log(solveCRT(remainders, modules)); // 6031
// console.log(S_CRT(remainders, modules)); // 6031


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

    if ( gcd(a, 26) != 1){ // Suggest a password
        return "Invalid password";
    }

    var text_num = str2num(text);

    var decifrado = '';

    const size = text.length;

    var ia = Inv_mod(a);

    for (let i = 0; i < size; i++) {
        var ind = 26*26 + parseInt(ia) *( parseInt(text_num[i]) - parseInt(b));
        decifrado += getLetter(ind); 
    }

    return decifrado;

}

var a = C_Afin("EsteMensajeEsParaDecodificarlo", ["p", "p"]);

// Contar ocurrencias de las letras

function A_Afin(text){ // Fuerza bruta
    
    let size = Letters.length;
    
    let count = {}

    // Count with a dictionary
    text.split('').forEach(function(s) { 
        count[s] ? count[s]++ : count[s] = 1;
     });

     console.log(count);

     // Create items array
    var items = Object.keys(count).map(function(key) {
        return [key, count[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    
    // Create a new array with only the first 5 items
    var arr_top = items.slice(0, 5);
    console.log(arr_top);
    
    // Probar con el que más se repite a ser 'E'

    // Probar con todos 
    // for (let i = 0; i < size; i++) { // Recorremos las letras
    //     if( gcd( i , size ) == 1 ){ // a
    //         for (let j = 0; j < size; j++) { // b
    //             //console.log(D_Afin(text, [getLetter(i), getLetter(j)]));
    //         }
    //     }
    // }
        
}

console.log("A atacar con afín: ", a);
A_Afin(a);

A_Afin(D_Afin(a, ["p", "p"]))


// tests
// console.log("Funciona: ", C_Vigenere("HolaMuchoGusto", "Clave") == "JZLVQWNHJKWDTJ");
// console.log("Funciona: ", D_Vigenere(C_Vigenere("HolaMuchoGusto", "Clave"),"clave") == "HolaMuchoGusto".toUpperCase());
// console.log(C_Afin("abcde", ["c", "b"]));
// Para el decifrado afín solo es saber calcular el inverso módulo 26
// console.log( D_Afin( C_Afin( "abcdefghijklmnopqrstuvwxyz" , ["h", "a"]), ["h", "a"]) );

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