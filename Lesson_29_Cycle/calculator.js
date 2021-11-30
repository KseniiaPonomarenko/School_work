/* Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,   
вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется. */


let result = 0;

let onemore = true

while (onemore) {
    result = 0;
    let a = Number(prompt("Enter first number, please"));
    let b = Number(prompt("Enter second number, please"));
    let c = prompt("Enter action +,-,/,*, please");

    switch (c) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;
        default: console.log("Error");
    }

    alert(`result: ${result}`)
    onemore = confirm("Do you want to continue?");

}