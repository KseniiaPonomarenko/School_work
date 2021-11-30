/* Task-7 */
/* Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
 от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%. */

let price = prompt("Enter the price, plese");

if (price >= 200 && price < 300) {
    console.log(`Your discount is 3%, to pay - ${price - (price * 0.03)}`);
}
else if (price >= 300 && price < 500) {
    console.log(`Your discount is 5%, to pay - ${price - (price * 0.05)}`);
}
else if (price >= 500) {
    console.log(`Your discount is 7%, to pay - ${price - (price * 0.07)}`);
}
else {
    console.log("You don't have a discount");
}