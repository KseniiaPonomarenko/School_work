
/* Task-1 */
/* Подсчитать сумму всех чисел в заданном пользователем диапазоне. */

let v1 = Number(prompt("Enter firts number"));
let v2 = Number(prompt("Enter second number"));
let res = 0;


// Делаем цикл. Проверяем, если v1<v2, тогда делаем цикл от  v1 до v2, если v2<v1, тогда цикл от v2 до v1
for (let i = (v1 > v2 ? v2 : v1); i <= (v1 > v2 ? v1 : v2); i++) {
    res = res + i;
}

console.log(res);