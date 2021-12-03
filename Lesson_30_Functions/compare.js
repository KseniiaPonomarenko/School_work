
/* Task -3
Напиши функцію, яка приймає 2 числа і повертає:
-1, якщо перше число менше, ніж друге;
1 - якщо перше число більше, ніж друге;
0 - якщо числа рівні. */


// Просим пользователя ввести 2 числа
let a = Number(prompt("Enter the firts number"));
let b = Number(prompt("Enter the second number"));


//объявляем функцию с агрументами
function comprassion(a, b) {
    // добавляем условие и return
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else if (a === b) {
        return 0;
    }
}

// вызываем функцию в console.log
console.log(comprassion(a, b));