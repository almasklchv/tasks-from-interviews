// начало (13:50) 

// Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).


function isPrime(n) {
    let isPrime = false;
    for (let i = 2; i < 10; i++) {
        if (n == i) {
            continue;
        }

        if ((n % n == 0 && n % 1 == 0) && n % i != 0 && n != 1) {
            isPrime = true;
        } else {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i + ' это простое число.')
    } else {
        console.log(i + ' не является простым числом.')
    }
}

// конец (13:51)