/* Task-5 */
/* Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,    отрицательных и нулей.
При этом также посчитать, сколько четных и нечетных. 
Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. */

let a = prompt("Please, enter 10 numbers");
let n = a.split(" ");

let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i <= n.length; i++) {
    let num = parseInt(n[i]);
    if (num > 0) {
        positive++;
    }
    else if (num < 0) {
        negative++;
    }

    else if (num == 0) {
        zero++;
    }

    else if (num % 2 == 0) {
        even++;
    }

    else if (num % 2 !== 0) {
        odd++;
    }
}


console.log(`Positive ${positive}, negative ${negative}, zero ${zero}, even ${even}, odd ${odd}`);

