let arr1 = [1, 22, -4, 0, -54, 34, 3, 4, -5];
let arr2 = [4, 6, 'John', 'Stephen', false, 34, 54, -4];
let arr3 = [false, true, null, 'Hogwarts'];

/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный. */


console.log('(1) Функция должна возвращать новый массив с элементами в заданном диапазоне и не изменять исходный');
let filterRange = function ( arr, a, b ) {
    let inRange = [];
    let NumberElement = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            NumberElement = NumberElement + 1;
            if (arr[i] >= a && arr[i] <= b) {
                inRange.push(arr[i]);
            }
        }
    }
    if (NumberElement == 0) {
        console.log("\nError! Couldn't find any numeric value...", arr);
    }  else {
        console.log('\nInitial array ---> ', arr);
        console.log('Filtred array ---> ', inRange);
    }
}


filterRange( arr1, -2, 8 );
filterRange( arr2, -2, 8 );
filterRange( arr3, -2, 8 );



/* Напишите функцию filterRangeInPlace(arr, a, b), 
которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.


Функция должна изменять принимаемый массив и ничего не возвращать. */

console.log('\n\n\n(2) Функция должна возвращать массив с элементами в заданном диапазоне, удалив при этом все элементы вне диапазона');

let filterRangeInPlace = function ( arr, a, b ) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number' || (typeof arr[i] === 'number' && !(arr[i] >= a && arr[i] <= b))) {
                delete arr[i];
            }
        }
    let filtered = arr.filter(function (el) {
        return el != null;
    });
    if (filtered.length == 0) {
        console.log(`\ncouldn't find any value between ${a} and ${b}`, filtered);
    }  else {
        console.log(`\nvalue between ${a} and ${b}`, filtered);
    }
}


filterRangeInPlace( arr1, -2, 8 );
filterRangeInPlace( arr2, -2, 8 );
filterRangeInPlace( arr3, -2, 8 );

