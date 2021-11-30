/* Task-4 */
/* Запросить у пользователя год и проверить, високосный он или нет.
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100. */

let year = prompt("Enter the year, please");
let leap = year % 4;
let leap2 = year % 400;
let notlaep = year % 100;

if (((leap == 0) || (leap2 == 0)) && notlaep > 0) {

    console.log(`The year ${year} is leap`);
}
else {

    console.log(`The year ${year} is not leap`);
}
