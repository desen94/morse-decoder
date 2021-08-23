const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
}

function decode(expr) {
    let result = ''
    for (let startChar = 0; expr.length > startChar; startChar += 10) {
        const subExpr = expr.substr(startChar, 10)
        if (subExpr == '**********') {
            result += ' '
            continue
        }
        let charMorse = ''
        for (let start = 0; subExpr.length > start; start += 2) {
            if (subExpr.substr(start, 2) == '10') {
                charMorse += '.'
            }
            if (subExpr.substr(start, 2) == '11') {
                charMorse += '-'
            }
        }
        result += MORSE_TABLE[charMorse]
    }
    return result
}

module.exports = {
    decode
}