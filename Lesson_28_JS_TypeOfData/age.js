/* Task-1 */
let age = prompt("Укажите Ваш возраст");
if (age >= 0 && age <= 12) {
    console.log("Ребенок")
}
else if (age >= 12 && age <= 18) {
    console.log("Подросток")
}
else if (age >= 18 && age <= 60) {
    console.log("Взрослый")
}
else if (Number(age) > 60) {
    console.log("Пенсионер")
}
else {
    console.log("Возраст неопределен")
}