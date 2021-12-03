/* Task - 4
Напиши функцію, яка обчислює факторіал переданого їй числа. */


// Получаем число от пользователя
let a = Number(prompt("Enter the number"));



function factorial(n) {
    // делаем цикл, с помощью которого вычисляем факториал
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    // возвращаем значение
    return result;
}

// рез-т ф-ции выводим в консоль
console.log(factorial(a));
