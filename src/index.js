const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let decoded = '';
    function morseToBinary(str) { // transform morse to binary
        let binary = '';
        for (let i = 0; i < str.length; ++i) {            
            if (str[i] === '.') {
                binary += '10';    
            } else if (str[i] === '-') {
                binary += '11';
            }
        }
        if (binary.length < 10) {
           binary = '0'.repeat(10 - binary.length) + binary;
        }
        return binary;
    }

    function renameKey(obj, old_key, new_key) { // rename object keys
        obj[new_key] = obj[old_key];
    }

    for (let key in MORSE_TABLE) { // rewrite MORSE_TABLE
        renameKey(MORSE_TABLE, key, morseToBinary(key));
    }
    
    for (let i = 0; i < expr.length - 9; i += 10) {
        let char = expr.slice(i, i + 10);
        for (let key in MORSE_TABLE) { 
            if (char === key) {               
                decoded += MORSE_TABLE[key];
            }
        }
    }
    return decoded;
}



module.exports = {
    decode
}