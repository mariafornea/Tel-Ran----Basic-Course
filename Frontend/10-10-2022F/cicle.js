/*let age = 18;
console.log(++age); // префиксная инкрементация (19)
console.log(age++); // постфиксная инкрементация (19)
console.log(--age); // префиксная декрементация (19)
console.log(age--); // постфиксная декрементация (19)*/

// префиксная форма срабатывает сразу же!
/*let number = 5; 
// number = number + 1
console.log(++number); // 6
console.log(number); // 6 */

// постфиксная инкрементация срабатывает при следующем вызове переменной!
/*let number1 = 5;
console.log(number1++); // 5
console.log(number1); // 6*/

/*let number = 5;
console.log(--number); // 4
console.log(number); // 4*/
/*let number = 5;
console.log(number--); // 5
console.log(number); // 4*/

//немного более сложный пример
/*let number1 = 10;
let number2 = 5;
let result = number1++ + number2; 
console.log(result); // 15
console.log(number1); // 11
console.log(result); // 15!*/

//************************************************************************************************
//цикл WHILE

//ИЗБЕГАЙ БЕСКОНЕЧНЫХ ЦИКЛОВ! УБИВАЕТ ВКЛАДКУ, НЕРВЫ, БРАУЗЕР!

//цикл WHILE

//ИЗБЕГАЙ БЕСКОНЕЧНЫХ ЦИКЛОВ! УБИВАЕТ ВКЛАДКУ, НЕРВЫ, БРАУЗЕР!

let number = 0;
while (number < 5) {
    console.log(number);
    number++;
}

/*******************************************************************************************************/

// цикл DO WHILE
let i = 0;
do {
    console.log(i++);
} while (number <= 10);
