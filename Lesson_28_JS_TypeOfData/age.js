/* Task-1 */
/* Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
подростком (12–18), взрослым (18_60) или пенсионером (60– ...). */
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