// начало (14:35)

let number = 5;

function logMultiplicationTable(n) {
    let result = '';
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            result += '  ';
        } else if (i == n) {
            result += i + '\n';
        } else  if ((i + '').length > 1) {
            result += i + ' ';
        } else {
            result += i + '  ';
        }
    }

    for (let i = 1; i <= n; i++) {
        result += i + ' ';
        for (let j = 1; j <= n; j++) {
            if (j == n) {
                result += i * j + '\n';
            } else if ((i * j + '').length > 1) {
                result += i * j + ' ';
            } else {
                result += i * j + '  ';
            }
        }
    }
    return result;
}

console.log(logMultiplicationTable(number))

// конец (14:58)