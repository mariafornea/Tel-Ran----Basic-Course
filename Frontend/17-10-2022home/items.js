// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//  есть дефисы удаляются, а все слова после них получают заглавную букву.

console.log('(1) Функция заменяет дефисы пробелами и выводит строку, где каждое слово с заглавной буквы');
function camelize ( str ) {
    strUpdate = str.split('-'); // разбиваем строку на массив без -
    let strResult = ''; 
    for (let i = 0; i < strUpdate.length; i++) {
        strResult = strResult.concat(strUpdate[i]) + ' '; // сохраняю в новую пустую строку слова из массива с пробелами
    }
    return strResult.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}) // если это начало строки или
}                                       // пробел, значит следующий за ними символ переводим в верхний регистр

let stringValue = 'a-day-without-laughter-is-a-day-wasted';
console.log(camelize(stringValue));



 // Задача: написать функцию, принимающую массив чисел
 // и возвращающую сумму всех его положительных элементов и отрицательных 
 // чисел отдельно в виде нового массива

console.log('\n\n\n(2) Функция возвращает сумму положительных чисел и сумму отрицательных чисел в ввиде массива');
console.log('Я не уверена, но решила добавить еще проверку на тип элементов массива, если они не являются числами, тогда просто сохраняются в виде строки и выводятся ниже');
function returnArrOfSum ( array ) {
    let sumPoz = 0;
    let sumNeg = 0;
    let difValue = '';
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'number') {
            difValue = difValue + array[i] + ', ';
        }
        else {
            if (array[i] < 0) {
                sumNeg = sumNeg + array[i];
            }
            else {
                sumPoz = sumPoz + array[i];
            }
        }
    }
    let arrUpdate = [sumPoz, sumNeg];
    if (difValue.length == 0) {
        console.log('Sums of positive and negative numbers --->', arrUpdate);
    }
    else {
        console.log('Sums of positive and negative numbers ---> ', arrUpdate);
        console.log('Elements of non-numeric type ---> ', difValue);
    }
}
let arr = [-2, 4, -5, 6, 12, -45];
let arr2 = [-3, -5, -6, 3, 5, 'John', 3 < 5, false];
console.log('\n',arr);
returnArrOfSum(arr);
console.log('\n',arr2);
returnArrOfSum(arr2);