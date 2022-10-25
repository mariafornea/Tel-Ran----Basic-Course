/* // (1) Дано число, необходимо вывести сумму цифр этого числа.
let getTheGitSum = ( number ) => {
    let sum = 0;
    let numberCopy = number;
    while (number != 0) {
        sum = sum + number % 10;
        number = (number - number % 10) / 10;
    }
    return ( console.log(`The sum of the digits of the number ${numberCopy} is ${sum}`));
}
getTheGitSum(345);
getTheGitSum(9);
getTheGitSum(0);
getTheGitSum(23);
 */
// строки чуть подробнее
// length - длина строки
// [0] - индексы
//console.log('Hello'.length, 'Hello'[0], 'Hello'[1], 'Hello'[2]);

/* let hello = 'Hello World';
let helloLength = hello.length;
let helloUpperCase = hello.toUpperCase();
let index4Upper = hello[4].toUpperCase();
let helloLowerCase = hello.toLowerCase();
console.log(hello);
console.log(helloLength);
console.log(helloUpperCase);
console.log(index4Upper);
console.log(helloLowerCase); */







//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

/* let stringDate = '2025-12-31';

let stringDateArray = stringDate.split("-"); // создание массива["2025", "12", "31"] 
stringDateArray.reverse();
console.log(stringDateArray);
let stringDateUpdate = stringDateArray.join("/");
//let stringDateUpdate = `${stringDateArray[2]}/${stringDateArray[1]}/${stringDateArray[0]}`;
console.log(stringDateUpdate); */

//  Дана переменная str, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, 
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 

/* let shortingString = function (string, max) {
  if (string.length <= max) {
    return string;
  }
  return string.slice(0, max) + "...";
  
};
console.log(shortingString("The midnight club", 10));  */



// Как объединить строки
// concat - Объединяет две или более строки в одну

/* let firstHello = 'Hello'.concat(' proger'); // Hello progger
let secondHello = 'Hello'.concat(' ', 'p', 'r', 'o', 'g', 'er');
console.log(firstHello);
console.log(secondHello); */


// Как разделить сторки на подстроки
// split - разбивает строку в массив по указанному разделителю
// Вторым параметром можно указать ограничитель

// Получаем каждый символ
/* let splitedString = 'Hello proger'.split(''); // ['H','e','l','l','o',' ','p','r','o','g','e','r']
let splitedString2 = 'Hello prroger'.split(' '); // ['Hello','proger']
console.log(splitedString);
console.log(splitedString2); */


// Устанавливаем ограничитель
/* let splitedString = 'Hello proger'.split(' ', 1); // ['Hello']
console.log(splitedString); */




// Как повторить строку 
// repeat - Принимает в качестве параметра число и повторяет строку указанное колличество раз

/* let repeatString = 'Hello'.repeat(5); 
console.log(repeatString); // HelloHelloHelloHelloHello */




// includes
// Проверяет, содержит ли строка указанную подстроку
// Возвращает значение true или false
// Вторым параметром можно указать позицию в строке с которой следует начать поиск

/* let checkString = 'Hello proger'.includes('proger'); // True
let checkString2 = 'Hello proger'.includes('Hello', 0); // True
console.log(checkString);
console.log(checkString2); */





// indexOf
// Вохвращает индекс первого найденного вхождения указанного значения
// Поиск ведется от начала до конца строки. Если совпадений нет возвращает -1
// Вторым параметром можно указать позицию, с которой следует начать поиск

/* let searchIndex = 'Hello World'.indexOf('o'); // 4
let searchIndex2 = 'Hello World'.indexOf('o', 5); // 7
console.log(searchIndex);
console.log(searchIndex2); */





// search 
// Проверяет есть ли в строке указанное значение и возвращает индекс начала совпадения
/* let searchString = 'hi, hello, hey'.search('hey'); // 11
console.log(searchString); */




// Как извлечь подстроку
// slice - извлекает часть строки и возвращает новую
// обязательный параметр - начало извлечения
// вторым параметром можно указать границу (по умолчанию - до конца строки)

/* let str = "Методы строк - как извлечь подстроку".slice(-9, -6); // под 
console.log(str);
let str2 = "Методы строк - как извлечь подстроку".slice(16, 21) // 
console.log(str2); */




// substr 
// Извлекает часть строки указанной длины
// первым параметром принимает стартовую позицию, вторым - длину
// Стартовая позиция может быть отрицательной, тогда извлечение начинается с конца строки

/* let str = "Методы строк - как извлечь подстроку".substr(7, 5); 
let str2 = "Методы строк - как извлечь подстроку".substr(-7, 5); 
console.log(str); // строк
console.log(str2); // дстро */




// Как заменить подстроку
// replace - ищет в строке указанное значение и возвращает новую строку
// , в которой выполнена замена на второй параметр
// Можно заменить найденные значения новой строкой или передать функию для работы над совпадениями

/* let replaceString = 'hi, hello, hi'.replace('hi', 'hey'); // hey, hello, hi
let replaceString2 = 'hi, hello, hi'.replace(/hi/g, 'hey'); // hey, hello, hey
console.log(replaceString);
console.log(replaceString2); */

// replaceAll 
// Дает такой же результат как и replace с глобальным флагом g
// Заменяет все найденные значения другой строкой или функцией

/* let replaceString3 = 'hi, hello, hi'.replaceAll('hi', 'hey'); // hey, hello, hey
console.log(replaceString3); */










