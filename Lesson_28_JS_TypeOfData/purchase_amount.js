/* Task-7 */
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