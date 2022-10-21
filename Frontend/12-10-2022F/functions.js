/* function function_name ( argument ) {
    // body
    return argument;
}
let returnResult = function_name( 'Hello, World!' );
console.log(returnResult); // Hello, world! */

// (2) Function Expression = Функциональное выражение
/* let sayHi = function() {
    console.log( 'Привет!' );
};
console.log(sayHi()); */  

/* let sayHi = function( stringHi ) {
    console.log( stringHi );
};
sayHi( 'Привет!' ); // правильно оформленное функциональное выражение */

// ВАЖНО! Имя функции - это переменная, куда эта функия сохранится. Нельзя вызвать такую функцию, без использования имени переменной

// Мы можем скопировать функцию в другую переменную:


/* // Так выглядит функция:
function functionName ( arg1, arg2 ) {
    // body
}
// Так выглядит функциональное выражение:
let functionName = function ( arg1, arg2 ) {
    // body
} */

/* ******************************************************************** */

// Arrows Fucntion = Стрелочные функции

 // Слово function не используется, сразу перечисление аргументов
// В целом синтаксис этих функций это своего рода "синтаксический сахар", он позволяет сильно сократить
// синтаксис. Стрелка указывает на то, что это возвратная функия, то есть она всегда будет что-то возвращать

/* let func = ( arg1, arg2 ) => {
    return arg1 + arg2;
} */
//console.log( func( 7, 12 )); // 19
// func( 7, 12); // ничего не выведет, ведь мы не указали куда выводить и куда сохранить
/* let funcResult = func( 7, 12 );
console.log(funcResult); // 19 */

// После стрелки не обязательно должен быть блок, то есть {}. Все что после стрелки обязательно вернется
// Но! Если будет несколько операции, лучше использовать фигурные скобки

/* let sum = ( arg1, arg2 ) => arg1 + arg2;
console.log(sum( 3, 4 )); // 7 */

// Забавная ситуация:

// const fucn2 = ( arg1, arg2 ) => ( arg2 === 0 ? 'Devision by zero' : arg1 / arg2 );
// Проверяется аргумент2, если он равен 0, выводится сообщение
// Если нет, происходит деление
// Это можно записать более читаемо:

/* const func2 = ( arg1, arg2 ) => (
    arg2 === 0
      ? 'Devision by zero'
        : arg1 / arg2
);
console.log(func2( 7, 0 )); // Devision by zero
console.log(func2( 7, 3 )); // 2.3333333333333335 */

// Эту функцию можно записать проще (хотя мне кажется это не проще):

/* const func2Simple = ( arg1, arg2 ) => {
    return (
        arg2 === 0
          ? 'Devision by zero'
            : arg1 / arg2
    );
}
console.log(func2Simple( 7, 0 )); // Devision by zero
console.log(func2Simple( 7, 3 )); // 2.3333333333333335  */

// А вот вообще супер простой вариант (подключаем еще и if): 

/* const func2Simple = ( arg1, arg2 ) => {
    if (arg2 === 0) {
        return 'Devision by zero';
    } return arg1 / arg2;
}
console.log(func2Simple( 7, 0 )); // Devision by zero
console.log(func2Simple( 7, 3 )); // 2.3333333333333335 */

/* const double = (n) => n * 2;
console.log(double( 5 )); */

/* let sum = ( a, b ) => { // фигурная скобка, открывающая тело многострочной функции
    let result = a + b; 
    return result; // если мы используем {}, то нам нужно указать return
} */

// Или так:

/* let sum = ( a, b ) => a + b;
console.log(sum( 3, 11 )); */

// Такую функцию можно сделать черным ящиком. То есть ее не надо дописывать и она всегда будет возвращать 
// сумму. Ее можно записать в отдельный файл и подключать когда это будет необходимо.

// Ну или так:

/* let sum = ( a, b ) => {
    return a + b;
}
console.log(sum( 3, 11 )); */


// Теперь понятно, простота не в краткости, а в понятности. Главное не чтобы было максимально коротко, а максимально понятно
// В любом коде важно чтобы он был настолько понятно и просто написан, чтобы не пришлось прописывать комментарии

/* ******************************************************************** */

// Callback Functions

//Это уже не синтаксис, это уже не какие-то особенные функции, это просто прием.
/* 
function sayHello ( name ) {
    console.log(`Hello, ${name}!`);
}
sayHello('John');

function sayGoodbye ( name ) {
    console.log(`Goodbye, ${name}!`);
}
sayGoodbye('John');

function showMessage ( callbackSay, name ) { // sayGoodbye, 'Irina'
    callbackSay(name);
}
showMessage(sayHello, 'Peter');
function showMessage2 ( say, namePerson ) {
    if ( say == 'hello' ) {
        sayHello(namePerson);
    }
    if ( say == 'goodbye' ) {
        sayGoodbye(namePerson);
    }
}
showMessage2('hello', 'Steven');
showMessage2('goodbye', 'Steven'); */
/* ******************************************************************** */

// В кратце:
// Есть синтаксиса функций: декларитивные функции, функциональные выражения, стрелочные функии

// (1) Декларативные функции:

/* function funtionName ( argument ) {
    // body
} */

// (2) Функциональные выражения: 

/* let functionName = function ( argument ) {
    // body
}
 */

// (3) Стрелочные функции:

/* const functionName = ( argument ) => {
    // body
} */

// Функции - это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функия объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration
// Если функция была создана как часть выражения, то функция была объявлена как Function Expression
// Function Declaration обрабатывается перед выполнением блока кода. Они видны во всем блоке.
// Function Expression создаются только когда поток выполнения достигает их. 