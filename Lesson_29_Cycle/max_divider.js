
/* Task-2 */

/* Запросить 2 числа и найти только наибольший общий делитель */

let p1 = Number(prompt("Enter first number"));
let p2 = Number(prompt("Enter second number"));
let arr = [];
let minp = p1 < p2 ? p1 : p2;

let remnum = 0;

for (let i = 1; i <= minp; i++) {
    if ((p1 % i) == 0 && (p2 % i) == 0) {
        arr.push(i);
    }
}

console.log(arr);

remnum = Math.max.apply(null, arr);
console.log(remnum);


/* Второй вариант, без массива */
/* let p1 = prompt("Enter nmber 1");
let p2 = prompt("Enter nmber 2");
for (let index = p1; index <= p1; index--) {
    if (p1 % index == 0 && p2 % index == 0) {
        alert(`${index}`);
        break;
    }
}
 */
