/* Task-5 */
/* Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом. */

let pal = prompt("Enter the 5-digit number");
console.log(((pal[0] == pal[4]) && (pal[1] == pal[3])) ? "This is palindrome" : "This is NOT palindrome");