// callback

/* function showInConsole ( collback, number ) { // 2 - вызываем с переданными параметрами
    const mathResult = square(number); // 3 - здесь callback(number) это square(10)
    // 6 - В mathResult сохраняем значение square(10)
    console.log(mathResult); // 7 - Выводим в консоль
}

function square ( numberSquare ) { // 4 - определяем и вызываем функцию
    return numberSquare * numberSquare; // 5 - возвращаем квадрат числа
}

showInConsole(square, 10); // 1 - передаем параметры

function calcSquareToSquare ( number ) {
    let result = square(square(number));
    console.log(result);
}

showInConsole(calcSquareToSquare, 5); */




// условия  + && ||

/* console.log('hello'.length); // 5

function stringLengthDetector ( value ) { // узнать что за тип данных
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value).length;
    }
}
console.log(stringLengthDetector('The midnight club'));
console.log(stringLengthDetector(1812));
console.log(stringLengthDetector(10 < 5)); */

/* if ( false || false || false || false || true ) {
    // сработает если хоть одно выражение истинно
} */

/* if ( true && true && true && true && false ) {
    // не сработает если хоть одно выражение ложно
} */






// Массивы - это упорядоченные данные
// Базовый синтаксис

//let arr = new Array();
//let arr = [];
//console.log(arr);
/* 
let fruits = [
    'Apple', // index 0
    'Orange', // index 1
    'Melone' // index 2
]
let apple = fruits[0]; // Apple
/* console.log(fruits);
console.log(fruits.length);
console.log(apple);
console.log(fruits[1]);
console.log(fruits[2]); */

// можно заменить или добавить элемент к массиву
/* fruits[2] = 'Pear';
fruits[3] = 'Cherry';
console.log(fruits); */

// В массиве могут храниться элементы любого типа

/* let arr = [
    'Apple' // 0 - строка
    [
        'Cat',
        'Dog',
        [
            134,
            665
        ]
    ], // 1 - массив
    true, // 2 - булевая истина
    function() { // 3 - функия
        return 'This is a function';
    }
];
// получить элемент с индексом 3 - функция и выполнить ее
console.log(arr[1][2[1]]);
console.log(arr[3]()); */



// Методы pop/push shift/unshift
 
// push - добавляет элемент в конец массива
/* let fruits = ['Apple', 'Pear'];
let fruitsLength = fruits.length; // 2
fruits[fruitsLength] = 'Cherry'; 
console.log(fruits);
 */

// pop - удаляет последний элемент массива
/* let fruits = ['Apple', 'Pear', 'Cherry'];
console.log(fruits.pop()); // удаляем последний элемент и выводим его
console.log(fruits); // ['Apple', 'Pear'] */


// дополнительные фишки pop и push

//let arr = ['Stephen', 'Jonny', 'Elisabeth'];

/* let updatedArrLength = arr.push('Miyagi');
console.log(updatedArrLength); // 4 */
// когда элемент добавляется то побочным свойством метода push  
// (конкретно его return) он возвращает новую length массива

/* let removedElement = arr.pop();
console.log(removedElement); */
/// когда элемент удаляется то побочным свойство метода pop
/// (конкретно его return) он возвращает этот удаленный элемент







// shift удаляет элемент в начале, сдвигая очередь, 
// так что второй элемент становится первым

/* let fruits = ['Apple', 'Pear', 'Cherry'];
console.log(fruits.shift()); // удаляем первый элемент и выводим его
console.log(fruits); // ['Pear', 'Cherry'] */

// unshift добавляет элемент в начало массива
/* let fruits = ['Apple', 'Pear', 'Cherry'];
console.log(fruits.unshift('Strawberry')); // 4
console.log(fruits); */






// внутреннее устройство массивов
/* let fruits = ['Apple', 'Pear', 'Cherry'];
let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
console.log(fruits === arr); //true
arr.push('Strawberry'); // массив меняется по ссылке
console.log(fruits); // (4) ['Apple', 'Pear', 'Cherry', 'Strawberry'] */







// Перебор элементов
// Одним из самых старых способов перебора элементов массива 
// является цикл for по цифровым индексам:

/* let fruits = ['Apple', 'Pear', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'Cherry') {
        fruits[i] = 'Strawberry';
    }
    console.log(fruits[i]);
} */

// для массивов возможен и другой вариант цикла, for..of:

/* let fruits = ['Apple', 'Pear', 'Cherry'];
for (let fruit of fruits) {
    console.log(fruit);
} */






// Немного о «length»
// Свойство length автоматически обновляется при изменении массива. 
// Если быть точными, это не количество элементов массива, 
// а наибольший цифровой индекс плюс один.

// Например, единственный элемент, имеющий большой индекс, даёт большую длину:
/* let fruits = [];
fruits[123] = "Cherry";
console.log( fruits ); // (124) [empty × 123, 'Cherry'] */


// Ещё один интересный факт о свойстве length – его можно перезаписать
// Если мы вручную увеличим его, ничего интересного не произойдёт. 
// Зато, если мы уменьшим его, массив станет короче. 
// Этот процесс необратим, как мы можем понять из примера:

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// console.log( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// console.log( arr[3] ); // undefined: значения не восстановились















// Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами. 
// Это можно использовать для создания многомерных массивов, например, для хранения матриц:

/* let newMatrix = [
    [1, 2, 3], // index 0
    [4, 5, 6], // index 1
    [7, 8, 9] // index 2
];
console.log(newMatrix[1][1]); // 5 - центральный элемент */





// ЗАДАЧИ

// 1) Что выведет следующий код?

/* let fruits = ['Cherry', 'Apple', 'Pear'];
let copyFruits = fruits; // создаем копию массива fruits
copyFruits.push('Avocado'); // добавляем новый элемент в конец массива
console.log(fruits); // ['Cherry', 'Apple', 'Pear', 'Avocado']
console.log(fruits.length); // длина массива fruits - 4 */



// 2) 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной. 
// Подсказка - функция округления Math.floor(то, что нужно округлить)
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

/* let styles = ['Jazz', 'Blues']; // created a new array
styles.push('Rock and Roll'); // added a new element to the end
//console.log(styles);
//styles[1] = 'Classic'; // replaced the value in the middle
//console.log(styles);
function changeMiddleElement ( array, stringValue ) {
    let middle = Math.floor(array.length / 2); // спасибо за подсказку, здесь у меня выходила ошибка
    array[middle] = stringValue;
    return array;
}
/* let testArray = ['Sarah', 'John', 'Stephen', 'Eva', 'Joshua'];
let testArray2 = ['Sarah', 'John', 'Stephen', 'Eva']; */
/* console.log(changeMiddleElement(testArray, 'King')); // (5) ['Sarah', 'John', 'King', 'Eva', 'Joshua']
console.log(changeMiddleElement(testArray2, 'Elisabeth')); // (4) ['Sarah', 'John', 'Elisabeth', 'Eva'] */
//console.log(changeMiddleElement(styles, 'Classic')); // replaced the value in the middle (best mode)
//console.log(styles.shift()); // deleted the first element
//console.log(styles);
//styles.unshift('Rap', 'Reggae'); // inserted new elements at the beginning
//console.log(styles);  */




// 3) напишите функцию, которая 
// принимает как аргумент массив
// и возвращает сумму всех чисел, которые в нем есть
// или если чисел нет, то возвращает ноль

/* function returnSumOfDigits ( array ) {
    let sum = 0;
    let checkDigits = 0;
    for ( let i = 0; i < array.length; i++ ) {
        if (typeof array[i] == 'number') {
            checkDigits = checkDigits + 1;
            sum = sum + array[i];
        }
    }
    if (checkDigits == 0) {
        console.log('0');
    } else {
        console.log(sum);
    }
}
let array1 = ['Sarah', 'John', 'Joshua'];
let array2 = [1, 2, 3, 4, 5];
let array3 = ['Sarah', 1, 2, 'John', 3, 4, 'Joshua', 5];
returnSumOfDigits(array1); // 0
returnSumOfDigits(array2); // 15
returnSumOfDigits(array3); // 15 */











// МАССИВЫ УГЛУБЛЕННЕЕ
// Больше методов массивов

// мы уже знаем
// arr.push(items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(items) – добавляет элементы в начало.






// Удаление элемента из массива - splice

// arr.splice(index[, deleteCount, elem1, ..., elemN])


// Он начинает с позиции index, 
// удаляет deleteCount элементов и вставляет 
// elem1, ..., elemN на их место. 
// Возвращает массив из удалённых элементов


// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// console.log( arr ); // осталось ["Я", "JavaScript"]


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// console.log( removed ); // "Я", "изучаю" <-- массив из удалённых элементов



// Метод splice также может вставлять элементы без удаления, 
// для этого достаточно установить deleteCount в 0:

// let arr = ["Я", "изучаю", "JavaScript"];
// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");

// console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"








// более простое удаление - slice
// arr.slice([start], [end])


// Он возвращает новый массив, 
// в который копирует элементы, 
// начиная с индекса start и до end (не включая end)

// let arr = ["t", "e", "s", "t"];
// let arr2 = arr.slice(1, 3); // e,s (копирует с 1 до 3)
// let arr3 = arr.slice(-2); // s,t (копирует с -2 до конца)



// Можно вызвать slice и вообще без аргументов: 
// let arrClone = arr.slice() // создаёт копию массива arr
// Это часто используют, чтобы создать копию массива для дальнейших преобразований, 
// которые не должны менять исходный массив.
















// объединение массивов в новый - concat 
// arr.concat(arg1, arg2) //синтаксис

// Он принимает любое количество аргументов, 
// которые могут быть как массивами, 
// так и простыми значениями.

// let arr = [1, 2];
// // // создать массив из: arr и [3,4]
// console.log( arr.concat([3, 4]) ); // [1,2,3,4]
// // // создать массив из: arr и [3,4] и [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // [1,2,3,4,5,6]
// // // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log( arr.concat([3, 4], 5, 6) ); // [1,2,3,4,5,6]






// Перебор: forEach
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива

// Его синтаксис:
// arr.forEach(
// 		function(item, index, array) {
// 	  // ... делать что-то с item
// 		}
// );



// Например, этот код выведет на экран каждый элемент массива:
// Вызов console.log для каждого элемента
// ["Bilbo", "Gandalf", "Nazgul"].forEach(
// 	(item, index, array) => {
// 	  console.log(`${item} имеет позицию ${index} в ${array}`);
// 	  console.log(array);
// 	}
// );







// includes - Поиск в массиве
// arr.includes(item, from) – ищет item, начиная с индекса from, 
// и возвращает true, если поиск успешен.

// let arr = [1, 0, false];
// console.log( arr.includes(1) ); // true

// const arr = [NaN];
// console.log( arr.includes(NaN) );// true (верно)









// углубленный поиск в массиве find
// Представьте, что у нас есть массив массивов. 
// Как нам найти вложенный массив с определённым условием?

// Здесь пригодится метод arr.find.
// Его синтаксис таков:
// let result = arr.find(
// 		function(item, index, array) {
// 	  // если true - возвращается текущий элемент и перебор прерывается
// 	  // если все итерации оказались ложными, возвращается undefined
// 	}
// );


// Функция вызывается по очереди для каждого элемента массива:
// item – очередной элемент.
// index – его индекс.
// array – сам массив.
// Если функция возвращает true, поиск прерывается и возвращается item. 
// Если ничего не найдено, возвращается undefined.



// Например, у нас есть массив c массивами пользователей, 
// каждый из которых имеет первым элементом фамилию, вторым имя. 
// Попробуем найти того, кто с фамилией Агранова

// let users = [
//   ['Иванов', "Вася"],
//   ['Петров', "Петя"],
//   ['Агранова', "Соня"],
// ];


// let user = users.find(item => item[0] == 'Агранова');

// console.log(user); // 







// отфильтровать массив - filter
// Синтаксис этого метода схож с find, но 
// filter возвращает массив из всех подходящих элементов

// let results = arr.filter(function(item, index, array) {
//   // если true - элемент добавляется к результату, и перебор продолжается
//   // возвращается пустой массив в случае, если ничего не найдено
// });


// let users = [
//   ['Иванов', "Вася"],
//   ['Агранова', "Петя"],
//   ['Агранова', "Маша"],
// ];

// // // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item[0] === 'Агранова');

// console.log(someUsers); //
















// Преобразование массива
// map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.

// Синтаксис:
// let result = arr.map(function(item, index, array) {
//   // возвращается новое значение вместо элемента
// });
// Например, здесь мы преобразуем каждый элемент в его длину:
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let arrMapping = arr.map(
// 	function(item) {
// 		if (item === "Nazgul") {
// 			return "Hobbit"
// 		}
// 		return item
// 	}
// )

// console.log(arrMapping)



// console.log(lengths); // 5,7,6










// split и join - разбивка и соединение строк в массивы

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }


// У метода split есть необязательный второй числовой аргумент 
// – ограничение на количество элементов в массиве. 
// Если их больше, чем указано, то остаток массива будет отброшен. 
// На практике это редко используется:

// let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
// console.log(arr); // Вася, Петя




// Разбивка по буквам
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:
// let str = "тест";
// console.log( str.split('') ); // т,е,с,т


// Вызов arr.join(glue) делает в точности противоположное split. 
// Он создаёт строку из элементов arr, вставляя glue между ними.

// Например:
// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(' '); // объединить массив в строку через ;

// console.log( str ); // Вася;Петя;Маша













// Итого
// Шпаргалка по методам массива:

// Для добавления/удаления элементов:

// push (...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

// Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.


// Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

// Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.







// Последнее - синтаксический сахар
// деструктуризация массива


// синтаксис для массива:
// let [item1 = default, item2, ...rest] = array


// Первый элемент отправляется в item1; 
// второй отправляется в item2, 
// все остальные элементы попадают в массив rest.

// Можно извлекать данные из вложенных объектов и массивов, 
// для этого левая сторона должна иметь ту же структуру, что и правая.


// Пример деструктуризации массива:

// // у нас есть массив с именем и фамилией

// let arr = ["Ilya", "Kantor"]
// let [firstName, surname] = arr;

// console.log(firstName)
// console.log(surname)
// // деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]


// console.log(firstName); // Ilya
// console.log(surname);  // Kantor




// оператор rest - Остаточные параметры «…»
// Если мы хотим не просто получить первые значения, 
// но и собрать все остальные, то мы можем добавить ещё один параметр, 
// который получает остальные значения, используя оператор 
// «остаточные параметры» – троеточие ("..."):

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name1); // Julius
// console.log(name2); // Caesar
// console.log(rest); // ["Consul", "of the Roman Republic"]

// // Обратите внимание, что `rest` является массивом.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2










// Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)











// Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]


/* function filterRangeInPlace ( arr, a, b ) { // new function
    arrFiltred = arr.slice(a, b+1);
    return arrFiltred;
}
let array = [1, 2, 3, 4, 5, 6];
console.log(filterRangeInPlace(array, 2, 4)); */