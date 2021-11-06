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

/* console.log(((year % 4) == 0) && ((year % 100) > 0) ? "Yes" : "No"); */

/* let result = (((year % 4) = 0) && ((year % 100) > 0) ? "Yes" : "No");
console.log(result); */
