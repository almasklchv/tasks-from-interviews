// начало (12:50)

// Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.

let numbers = [27, 27.8, 41.7];

function roundToNearestFive(number) {
    const remainder = number % 5;
  
    if (remainder === 0) {
      return number;
    }
  
    return remainder >= 2.5
      ? number + (5 - remainder)
      : number - remainder;
}

for (let i = 0; i < numbers.length; i++) {
    console.log(roundToNearestFive(numbers[i]))
}

// конец (13:15)