/* Task - 8 */
/* Запросить у пользователя длину окружности и периметр квадрата. 
Определить, может ли такая окружность поместиться в указанный квадрат. */

let circle = prompt("Enter the circle");
let square = prompt("Enter the square");

let d = circle / Math.PI;
let a = square / 4;

if (d <= a) {
    console.log("This circle can be in the square");
}
else {
    console.log("This circle can not be in the square");
}