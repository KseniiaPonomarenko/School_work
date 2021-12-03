/* Task - 6
Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */

function ractangleSquare(a, b) {
    if (b == undefined) {
        return a * a;
    }
    else { return a * b; }

}
console.log("Площадь фигуры:" + ractangleSquare(2) + "см.кв");