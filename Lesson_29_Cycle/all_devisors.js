
/* Task-3 */
/* Запросить у пользователя число и вывести все делители этого числа. */
let num = prompt("Enter the number, please");
let res = "";

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        res = res + i + ",";
    }
}

console.log(res);