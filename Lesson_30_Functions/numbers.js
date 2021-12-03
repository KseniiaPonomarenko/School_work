//Task- 5
//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
//Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// Просим пользователя ввести 3 числа
let a = prompt("Enter the firts number");
let b = prompt("Enter the second number");
let c = prompt("Enter the third number");

function numbers(a, b, c) {
    // возвращаем значение сложения в строку (т.к. введенные числа у нас с типом строка, то строка просто складывается) при возврате меняем тип на Number:
    return Number(a + b + c);

}

console.log(numbers(a, b, c));
