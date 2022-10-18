// (1) Если два числа равны - True, если нет - 'False'

/* function isEqualDecl ( num1, num2 ) {
    if ( num1 == num2 ) {
        console.log('True');
    } else {
        console.log('False');
    }
}
isEqualDecl( 10, 10); 

let isEqualArr = ( num1, num2 ) => (
    num1 === num2 
      ? 'True'
        : 'False'
);
console.log(isEqualArr( 10, 10));

let isEqualArr2 = (num1, num2 ) => num1 === num2;
console.log(isEqualArr2( 10, 10)); // true */

// (2) Если сумма чисел больше 10 - True, если нет - 'False'

/* function checkSum ( num1, num2 ) {
    return Boolean((num1 + num2) > 10);
}
console.log(checkSum(3, 5)); // false

let checkSumArr = ( num1, num2 ) => (num1 + num2) > 10;
console.log(checkSumArr(3, 5)); */

// (3) Если число отрицательное - True, если нет - 'False'

/* function checkNumber( number ) {
    console.log(Boolean(number < 0));
}
checkNumber(15); // false

let checkNumberArr = ( number ) => number < 0;
console.log(checkNumberArr(-10)); */

// (4) Если число в определенном диапазоне (>0 но <10) - True, если нет - 'False'

/* function isNumberInRange ( number ) {
    console.log(Boolean((number > 0) && (number < 10)));
}
isNumberInRange(-15);

let isNumberInRangeArr = (number) => (number > 0) && (number < 10);
console.log(isNumberInRangeArr(9));
console.log(isNumberInRangeArr(11)); */

// (5) Если число четное - True, если нет - 'False'

/* function isEven( number ) {
    console.log(Boolean(number % 2 == 0));
}
isEven(5);
isEven(8);

function isEvenComm( number ) {
    let result = Boolean(number % 2 == 0);
    if(result) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
isEvenComm(5);
isEvenComm(8);

let isEvenArr = ( number ) => number % 2 == 0;
console.log(isEvenArr(4));
console.log(isEvenArr(5)); */

// (6) Фунция-выражение, которая привествует по имени, если имени нет, пишет "гость"

/* let sayHello = ( name = 'Guest') => { // Стрелочная функция
    return `Hello, ${name}!`;
}
console.log(sayHello());
console.log(sayHello('John'));

let sayHelloExp = function ( name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
sayHelloExp();
sayHelloExp('Boris'); */

// (7) Произведение чисел

/* function Multi( num1, num2 ) {
    console.log(num1 * num2);
}
Multi(3, 4);

let MultiExp = function( num1, num2 ) {
    console.log(num1 * num2);
}
MultiExp(3, 4);

let MultiArr = ( num1, num2 ) => num1 * num2;
}
console.log(MultiArr(3, 4)); */

// (8) функция принимает 3 числа и возвращает rgb-строку, по умоланию числа равны 0

/* function rgb ( num1 = 0, num2 = 0, num3 = 0 ) {
    console.log(`rgb(${num1}, ${num2}, ${num3});`);
}
rgb(34, 80, 111);
rgb();
let rgbExp = function( num1 = 0, num2 = 0, num3 = 0 ) {
    console.log(`rgb(${num1}, ${num2}, ${num3});`);
}
rgbExp(12, 44, 45);
rgbExp(); */ 

// (9) Используя цикл while вывести все числа от 45 до 67

/* function pasteRange ( start, end ) {
    while ( start <= end ) {
        console.log(start);
        start++;
    }
}
pasteRange(45, 67);

let pasteRangeExp = function ( start, end ) {
    while (start <= end) {
        console.log(start);
        start++;
    }
} 
pasteRangeExp(45, 67);

let pasteRangeArr = ( start, end ) => {
    while ( start <= end ) {
        console.log(start);
        start++;
    }
    return 'All done';
}
pasteRangeArr(45, 67);  */

// (10) Используя цикл while вывести все числа от 45 до 67 которые кратны 10

/* function multiOfTen ( start, end ) {
    while ( start <= end ) {
         if (start % 10 == 0) {
            console.log(`${start} is a multiple of 10`);
         }
         start++;
    }
}
multiOfTen(45, 67);

let multiOfTenExp = function ( start, end ) {
    while ( start <= end ) {
        if (start % 10 == 0) {
           console.log(`${start} is a multiple of 10`);
        }
        start++;
   }
}
multiOfTenExp(45, 67);

let multiOfTenArr = ( start, end ) => {
    while ( start <= end ) {
        if (start % 10 == 0) {
           console.log(`${start} is a multiple of 10`);
        }
        start++;
   }
   return 'All done';
}
multiOfTenArr(45, 67); */

// (11) Используя цикл for вывести все числа от 45 до 67 которые кратны 10

/* function multiOfTen ( start, end ) {
    for ( ; start <= end; start++ ) {
        if (start % 10 == 0) {
            console.log(`${start} is a multiple of 10`);
        }
    }
}
multiOfTen(45, 67);

let multiOfTenExp = function ( start, end ) {
    for ( ; start <= end; start++ ) {
        if (start % 10 == 0) {
            console.log(`${start} is a multiple of 10`);
        }
    }
}
multiOfTenExp(45, 67);

let multiOfTenArr = ( start, end ) => {
    for ( ; start <= end; start++ ) {
        if (start % 10 == 0) {
            console.log(`${start} is a multiple of 10`);
        }
    }
    return 'All done';
}
multiOfTenArr(45, 67); */

// (12) Используя switch case, вернуть слово соответствующее цифре, напр. 0 = "ноль"

/* function returnWord ( number ) {
    switch (number) {
        case 0 : 
            console.log('zero'); break;
        case 1 :
            console.log('one'); break;
        case 2 :
            console.log('two'); break;
        case 3 :
            console.log('three'); break;
        case 4 :
            console.log('four'); break;
        case 5 :
            console.log('five'); break;
        case 6 :
            console.log('six'); break;
        case 7 : 
            console.log('seven'); break;
        case 8 :
            console.log('eight'); break;
        case 9 :
            console.log('nine'); break;
        default : console.log('Enter a number from 0 to 9');
    }
}
returnWord(7);
returnWord(0);
returnWord(11);

let returnWordExp = function ( number ) {
    switch (number) {
        case 0 : 
            console.log('zero'); break;
        case 1 :
            console.log('one'); break;
        case 2 :
            console.log('two'); break;
        case 3 :
            console.log('three'); break;
        case 4 :
            console.log('four'); break;
        case 5 :
            console.log('five'); break;
        case 6 :
            console.log('six'); break;
        case 7 : 
            console.log('seven'); break;
        case 8 :
            console.log('eight'); break;
        case 9 :
            console.log('nine'); break;
        default : console.log('Enter a number from 0 to 9');
    }
}
returnWordExp(7);
returnWordExp(0);
returnWordExp(11);

let returnWordArr = ( number ) => {
    switch (number) {
        case 0 : 
            console.log('zero'); break;
        case 1 :
            console.log('one'); break;
        case 2 :
            console.log('two'); break;
        case 3 :
            console.log('three'); break;
        case 4 :
            console.log('four'); break;
        case 5 :
            console.log('five'); break;
        case 6 :
            console.log('six'); break;
        case 7 : 
            console.log('seven'); break;
        case 8 :
            console.log('eight'); break;
        case 9 :
            console.log('nine'); break;
        default : console.log('Enter a number from 0 to 9');
    }
    return 'All done';
}
returnWordArr(7);
returnWordArr(0);
returnWordArr(11); */

/* let returnWordArr2 = ( number ) => {
    return (
        number == 0
          ? 'zero'
          : number == 1
            ? 'one'
            : number == 2
              ? 'two'
              : number == 3
                ? 'three'
                : number == 4
                  ? 'four'
                  : number == 5
                    ? 'five'
                    : number == 6
                      ? 'six'
                      : number == 7
                        ? 'seven'
                        : number == 8
                          ? 'eight'
                          : number == 9
                            ? 'nine'
                            : 'Enter a number from 0 to 9'
    )
}
console.log(returnWordArr2(7));
console.log(returnWordArr2(0));
console.log(returnWordArr2(11)); */

// (13) Небольшой калькулятор ( 2 числа + одна из 4 операций )

function countUp ( num1, num2, op ) {
    return (
        op == '+'
          ? num1 + num2
          : op == '-'
            ? num1 - num2
            : op == '/'
              ? num1 / num2
              : op == '*'
                ? num1 * num2
                : 'Just +, -, / or *'
    )
}
console.log(countUp(6,  3, '+'));
console.log(countUp(6,  3, '-'));
console.log(countUp(6,  3, '/'));
console.log(countUp(6,  3, '*'));