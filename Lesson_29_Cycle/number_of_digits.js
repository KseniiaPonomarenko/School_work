/* Task-4 */
/* Определить количество цифр в введенном числе. */

let num = prompt("Enter the number, please");
let res = 0;

for (let i = 0; i <= num.length; i++) {
    if (Number(num[i])) {
        res++;
    }
}
console.log(res);
