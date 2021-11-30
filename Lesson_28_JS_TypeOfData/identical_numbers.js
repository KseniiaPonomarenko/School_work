/* Task-3 */
/* Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. */

let num = prompt("Enter the number");

if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) {
    console.log("NUmbers are identical");
}
else {
    console.log("You don't have identical numbers");
}