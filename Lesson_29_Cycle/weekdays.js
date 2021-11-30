/* Task 8
Зациклить вывод дней недели таким образом: «День недели.Хотите увидеть следующий день?»
и так до тех пор, пока пользователь нажимает OK. */

/* let today = Data.now(); */
let thisDay = new Date();
let nextData = true;

while (nextData) {
    thisDay.setDate(thisDay.getDate() + 1);


    nextData = confirm(`Date: ${thisDay} Do you want to continue?`);
}