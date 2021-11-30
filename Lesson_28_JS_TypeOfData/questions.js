/* Task-9 */
/* Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
За каждый правильный ответ начисляется 2 балла.
После вопросов выведите пользователю количество набранных баллов. */

let independence = prompt("Which year Ukraine have independence? 1-1989; 2-1991; 3-1993");
let mountain = prompt("Which the most highest Ukrainian mountain? 1-Hoverla; 2-Everest; 3-Petros");
let city = prompt("Which city in Ukraine is pearl of the black sea? 1-Kyiv; 2-Lviv; 3-Odessa");

let summ = 0;

if (independence == 2) {
    summ += 2;
}
if (mountain == 1) {
    summ += 2;
}

if (city == 3) {
    summ += 2;
}

console.log(summ);