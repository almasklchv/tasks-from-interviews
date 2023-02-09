// 12:47 (начало)

// Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 

let cities = ['Москва', 'Санкт-Петербург', 'Воронеж', 'Шымкент', 'Павлодар', 'Алматы'];


function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i != (arr.length - 1)) {
            result += arr[i] + ', ';
        } else {
            result += arr[i] + '.'
        }
    }
    return result;
}


console.log(arrayToString(cities))

// 12:50 (конец)