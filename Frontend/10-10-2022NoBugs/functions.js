// 1) FUNCTION DECLARATION = ДЕКЛАРАТИВНЫЕ ФУНКЦИИ

/* function someChange (параметры, через запятую) { //функция - это действие, лучше иметь в названии глагол
    // тело, код функции 
} */

/* function showGreeting ( message, number ) {     // строки 7-9 - лишь описание функции
    console.log(message, number)
} */

/* function washMashine ( thing1, thing2 ) {
    console.log('washing: ', thing1, thing2);
}
washMashine('кроссовки', 'футболка'); // washing: кроссовки, футболка
washMashine('варешки', 'шарфик'); // washing: варешки, шарфик */


/* washMashine('кроссовки', 'футболка'); // washing: кроссовки, футболка
washMashine('варешки', 'шарфик'); // washing: варешки, шарфик
function washMashine ( thing1, thing2 ) {
    console.log('washing: ', thing1, thing2);   // Function Declaration может вызываться до объявления
} */

/* function sumAandB () {
    let a = 10;
    let b = 5;
    let sumAB = a + b;
    console.log(sumAB);
}
sumAandB(); // абсолютно бессмысленная функция, хоть и рабочая */

/* let a = 10;
let b = 5;
function sumAandB ( number1, number2 ) {
    console.log('summ: ', number1 + number2); // более правильная функция
}
sumAandB(a, b); */

/* function showMessage () {
    let message = 'Hello, World!';
    console.log(message);
}
// console.log(showMessage); // покажет текст всей функции
showMessage(); // отработает нормально */

/* function showMessage () {
    let message = 'Hello, World!';
    console.log(message);
    return 'showMessage is called';
}
console.log( showMessage () ); // Hello, World! showMessage is called */

// ДЕФОЛТНОЕ ЗНАЧЕНИЕ

/* function sayHello ( firstName = 'Unknown User' ) {
    console.log(`Hello, ${firstName}!`);
}
sayHello(); // Hello, Unknown User!
sayHello('Maria'); // Hello, Maria! */

/* function sayHello ( firstName = 'Unknown', secondName = 'User' ) {
    console.log(`Hello, ${firstName} ${secondName}!`);
}
sayHello(); // Hello, Unknown User!
sayHello('Maria', 'Fornea'); // Hello, Maria! */

// Пример с кофемашиной
let wallet = 100 // 60

function paid ( orderSum ) {
    if (wallet >= orderSum) {
        changeWallet(orderSum);
        return 'Bought';
    }
    return 'Not enough money';
}

function changeWallet ( changeSum ) {
    wallet = wallet - changeSum;
    console.log(`Balance: ${wallet}`);
}
//console.log(paid(40)); // 60
//console.log(paid(100)); // 0
console.log(paid(150)); // Not enough money