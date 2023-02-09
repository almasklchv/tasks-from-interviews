// начало (13:20)

// Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 

let numbers = [25, 41, 1048]; 

function correctCase(n) {
    if (((n + '').length == 1 && n < 5) || (n % 10 >= 2 && n % 10 <= 4 && n > 20)) {
        console.log(n + ' компьютера')
    } else if (n % 10 == 1 && n > 20) {
        console.log(n + ' компьютер')
    } else {
        console.log(n + ' компьютеров')
    }
}

for (let i = 0; i < numbers.length; i++) {
    correctCase(numbers[i])
}

// конец (13:40) 