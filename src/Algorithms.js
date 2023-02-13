function gcd(m, n){ // m y n enteros positivos. Retorna entero
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
function Inv_mod(a, m = 26){ // 
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

const solveCRT = (remainders, modules) => { // recibe dos arreglos de enteros. Retorna un entero grande
    // Multiply all the modulus
    const prod = modules.reduce((acc, val) => acc * val, 1n);
    
    return modules.reduce((sum, mod, index) => {
        // Find the modular multiplicative inverse and calculate the sum
    // SUM( remainder * productOfAllModulus/modulus * MMI ) (mod productOfAllModulus) 
        const p = prod / mod;
        return sum + (remainders[index] * modularMultiplicativeInverse(p, mod) * p);
    }, 0n) % prod;
}

function S_CRT(re, mo){ // Recibe dos arreglos de enteros. Retorna entero (solución)
    var a = solveCRT(re, mo)    
    return parseInt(a)
}


function Mul_Mat(a, b) { // Recibe dos matrices (arreglos)
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

function strip(string) {
    return string.replace(/\s+|\s+$/g, '');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getLetter(n){ // Recibe entero. Retorna string de una letra
    return Letters[n % 26]; 
}
function getNumber(a){ // Recibe una letra. Retorna un número
    i = 0;
    a_up = a.toUpperCase();
    while(a_up != Letters[i]){
        i++;
    }
    return i;
}
function str2num(str){ // Recibe una letra. Retorna un número
    num = [];
    for (let i = 0; i < str.length; i++) {
        num.push(getNumber(str[i]).toString());
    }
    return num; // 2-digits numbers
}
function num2str(num){ // Recibe un arreglo de números. Retorna un string correspondiente
    str = '';
    for (let i = 0; i < num.length; i++) {
        str += getLetter(parseInt(num[i]));
    }
    return str;
}

function C_Cesar(text, key){ // Mejorar
    return C_Vigenere(text, key)
}
function D_Cesar(text, key){ // Mejorar
    return D_Vigenere(text, key)
}

// Vigenere
function C_Vigenere(text, key){ // Recibe text: un string, key: un string (palabra)
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
function D_Vigenere(text, key){ // Recibe text: un string, key: un string (palabra)
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

// Afin
function C_Afin(text, key){ // Asumimos que la clave es como ["m", "d"]
    var a = str2num(key[0]);
    var b = str2num(key[1]);
    text = strip(text);
    if ( gcd(a, 26) != 1){
        while( gcd(a, 26) != 1 ){
            a += getRandomInt(26);
        }
        return "Invalid password, try with: " + "(" + getLetter(a) + ", " + getLetter(getRandomInt(26)) +")";
    }
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
    text = strip(text);
    if ( gcd(a, 26) != 1){
        while( gcd(a, 26) != 1 ){
            a += getRandomInt(26);
        }
        return "Invalid password, try with: " + "(" + getLetter(a) + ", " + getLetter(getRandomInt(26)) + ")";
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

// 1 -> 'e'
// 2 -> 'a'
// Sale el sistema: 
// a'x'+b='e' ----- > 23 a + b = 4
// a'p'+b='a' ----- > 15 a + b = 0
// podemos restar siempre módulo 26
// ----- > (23-15)a = 4 ---- > 8a == 4

function Count_letters(text){ // Recibe un texto. Retorna una arreglo de arreglos: [ ['a', #1], ['d', #2], ... ]
    let count = {}
    // Count with a dictionary
    text.split('').forEach(function(s) { 
        count[s] ? count[s]++ : count[s] = 1;
     });
     //console.log(count);
     // Create items array
    var items = Object.keys(count).map(function(key) {
        return [key, count[key]];
    });
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    // Create a new array with only the first 5 items
    // var arr_top = items.slice(0, 5);
    // console.log(arr_top);
    return items.slice(0, items.length);
}

function A_Afin(text){ 
    // Tiene problemas cuando le entran espacios
    let size = Letters.length;
    text = strip(text).toUpperCase();   
    // Probar todas las opciones
    items = [];
    for (let i = 0; i < size; i++) { // Recorremos las letras
        if( gcd( i , size ) == 1 ){ // a
            for (let j = 0; j < size; j++) { // b    
                let d = D_Afin(text, [getLetter(i), getLetter(j)]);
                items.push([Count_letters(d), [i,j]])
            }
        }
    }
    // x[casos i,j][0: conteo, 1: i,j][SOLO para conteo: 0: más repetida, 1, ...][0:letra, 1:cantidad]
    r = [];
    for (let j = 0; j < items.length; j++) {                
        if(items[j][0][0][0] == 'E' && items[j][0][1][0] == 'A'){        // E, A
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        } 
        if(items[j][0][0][0] == 'E' && items[j][0][1][0] == 'T'){ // E, T
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        }
        if(items[j][0][0][0] == 'T' && items[j][0][1][0] == 'A'){ // T, A
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        }
        if(items[j][0][0][0] == 'T' && items[j][0][1][0] == 'E'){ // T, E
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        } 
        if(items[j][0][0][0] == 'A' && items[j][0][1][0] == 'E'){ // A, E
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        }
        if(items[j][0][0][0] == 'A' && items[j][0][1][0] == 'T'){ // A, T
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        }
        if(items[j][0][0][0] == 'E' && items[j][0][1][0] == 'O'){ // E, O
            r.push(D_Afin(text, [ getLetter(items[j][1][0]), getLetter(items[j][1][1])]));
        }
    }
    if(r == []){
        return items
    } else {
        return r
    }
}


let a = "esteesunmensajequeestoyescribiendoparalasppersonasqueleenydescifranlasfrasesquehacenfaltaaaaa";
let b = "Keeping a secret can be both delightful and a burden secrets are something that I think every human being has had or have but trying to maintain them can sometimes be very difficult The reasons people keep secrets and the reasons they tell them can also change based on the situation There are several things that you must take into consideration when telling someone something confidential things such as can you really trust that individual do you know any personally information about them and have you told them any other important information in the past When telling an individual a secret it is important to know the seriousness before you decide to tell anybody"

b = strip(b)

let ca = C_Afin(b, ["x", "i"]);

console.log(ca);
console.log(A_Afin(ca));
//console.log(Count_letters(a))

//console.log(Count_letters(b))
//console.log(A_Afin(C_Afin(b, ["v", "l"])));

// console.log(C_Afin("holaeeaa", ["v", "h"]));

// console.log(S_CRT([4*Inv_mod(8, 26) % 26].map(BigInt),[26].map(BigInt)))
// console.log(gcd(8, 26))


// -------- Cifrados descifrados
// console.log("Funciona: ", C_Vigenere("HolaMuchoGusto", "Clave") == "JZLVQWNHJKWDTJ");
// console.log("Funciona: ", D_Vigenere(C_Vigenere("HolaMuchoGusto", "Clave"),"clave") == "HolaMuchoGusto".toUpperCase());
// console.log(C_Afin("abcde", ["c", "b"]));
// Para el decifrado afín solo es saber calcular el inverso módulo 26
// console.log( D_Afin( C_Afin( "abcdefghijklmnopqrstuvwxyz" , ["h", "a"]), ["h", "a"]) );

// -------- Multiplicación de matrices

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


// -------- Ataque afín

// console.log(C_Afin("EsteMensajeEsParaDecodificarlo", ["v", "n"]));
// console.log("A atacar con afín: ", a);
// A_Afin(a);

// A_Afin(D_Afin(a, ["p", "p"]))

// -------- Teorema del resto chino

// x mod 5 = 1
// x mod 59 = 13
// x mod 24 = 7
// const remainders  = [1, 13, 7].map(BigInt)
// const modules = [5, 59, 24].map(BigInt)

// console.log(solveCRT(remainders, modules)); // 6031
// console.log(S_CRT(remainders, modules)); // 6031