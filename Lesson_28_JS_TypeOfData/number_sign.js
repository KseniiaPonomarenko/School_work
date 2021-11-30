/* Task-2 */
/* Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */

let num = prompt("Enter the number");
switch (Number(num)) {
    case 0:
        console.log(")");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    default:
        console.log("ERROR");
        break;

}
