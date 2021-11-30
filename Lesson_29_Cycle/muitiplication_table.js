/* Task 9
Вывести таблицу умножения для всех чисел от 2 до 9.   
Каждое число необходимо умножить на числа от 1 до 10. */
result = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication on ${i}:`);
    for (let x = 1; x <= 10; x++) {
        console.log(`${i} * ${x} = ${i * x}`);
    }
}