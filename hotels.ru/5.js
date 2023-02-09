// начало (13:55)

// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). 
// На вход подаются два массива. На выходе массив с необходимыми совпадениями.

// Я еще не настолько хорош в решении задачек и сперва я решил таким образом:
function findDuplicates(arr, arr2) {
    let duplicatesFromArr1 = [];
    let duplicatesFromArr2 = [];
    let result = [];

    for (let i = -1; i < arr.length; i++) {
        for (let j = -1; j < arr.length; j++) {
            if (j == i) {
                continue;
            }

            if (arr[j] == arr[i] && !duplicatesFromArr1.includes(arr[j])) {
                duplicatesFromArr1.push(arr[j]);
                break;
            }
        }
    }

    for (let i = -1; i < arr2.length; i++) {
        for (let j = -1; j < arr2.length; j++) {
            if (j == i) {
                continue;
            }

            if (arr2[j] == arr2[i] && !duplicatesFromArr2.includes(arr2[j])) {
                duplicatesFromArr2.push(arr2[j]);
                break;
            }
        }
    }

    for (let i = 0; i < duplicatesFromArr1.length; i++) {
        if (duplicatesFromArr2.includes(duplicatesFromArr1[i]) && !result.includes(duplicatesFromArr1[i])) {
            result.push(duplicatesFromArr1[i])
        }
    }

    return result;
}

console.log(findDuplicates([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1])) // вывод: [17, 1]

// конец (14:30)