
/* Task-1 */
let v1 = Number(prompt("Enter firts number"));
let v2 = Number(prompt("Enter second number"));
let res = 0;

for (let i = (v1 > v2 ? v2 : v1); i <= (v1 > v2 ? v1 : v2); i++) {
    res = res + i;
}

console.log(res);