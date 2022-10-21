// Напишите следующую функцию, которая принимает некий массив данных. 

/* если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве  */
/* если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве */
/* во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива. */

function checkArray ( array ) {
    let num = 0;
    let char = 0;
    let mix = 0;
    let charMax = 0;
    let stringMax = '';
    let charIndex = 0;
    let numMax = 0;
    let numIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            num++;
        }
        else if (typeof array[i] === 'string') {
            char++;
        }
        else {
            mix++;
        }
    }
    if (num > 0 && char == 0 && mix == 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > numMax) {
                numMax = array[i];
                numIndex = i;
            }
        }
        let arrayUpdate = [numMax,numIndex];
        console.log('Largest number and its index ---> ', arrayUpdate);
    } 
    else if (char > 0 && num == 0 && mix == 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > charMax) {
                charMax = array[i].length;
                stringMax = array[i];
                charIndex = i;
            }
        }
        let arrayUpdate2 = [stringMax, charIndex];
        console.log('Longest string and its index ---> ', arrayUpdate2);
    } 
    else {
        let message = 'Invalid data type';
        let arrayUpdate3 = [message, array.length];
        console.log('Error: ', arrayUpdate3);
    }
}
let arr = [-3, -5, 5, 654, 33, 64, -4];
let arr2 = ['The Midnight Club', 'Haunting of Hill House', 'The Girl In The Mirror'];
let arr3 = ['Saturday', -45, false, null, 65, 'Night'];
console.log('(1) Если массив из чисел - вывести самое большое число и его индекс, из строк - самую длинную строку и ее индекс, смешанный тип данных - сообщение и длину массива');
console.log('\n', arr);
checkArray(arr);
console.log('\n', arr2);
checkArray(arr2);
console.log('\n', arr3);
checkArray(arr3);


/* (Необязательная задача) Напишите функцию которая будет принимать три массива с любыми данными и объединять их в один, новый массив и возвращать его. В зависимости от типа данных вы должны упорядочить данные. Сначала добавляйте только строки, затем цифры, затем булевы значения, все остальные значения могут быть в произвольном порядке добавлены далее. */

function concatArr ( array1, array2, array3 ) {
    let arrString = [];
    let arrNumber = [];
    let arrBoolean = [];
    let arrMix = [];
    let arrConcat = [];
    arrConcat = arrConcat.concat(array1, array2, array3); // сначала объединяю 3 массива в один
    //console.log(arrConcat); // просто чтобы не прописывать для каждого в отдельности цикл
    for ( let i = 0; i < arrConcat.length; i++ ) { // перебираю элементы по типу и сохраняю в разные массивы
        if (typeof arrConcat[i] === 'number') {
            arrNumber.push(arrConcat[i]);
        } else if (typeof arrConcat[i] === 'string') {
            arrString.push(arrConcat[i]);
        } else if (typeof arrConcat[i] === 'boolean') {
            arrBoolean.push(arrConcat[i]);
        } else {
            arrMix.push(arrConcat[i]);
        }
    }
    let arrResult = [];
    arrResult = arrResult.concat(arrString, arrNumber, arrBoolean, arrMix); // объединяю все в один массив
    console.log('\nРезультат --->');
    console.log(arrResult);
}
arr = [1, 2, 3, 'Cherry', 6, 8, null];
arr2 = [
    [1, 2, 3],
    function doSomething () {
        return 0;
    },
    'Stephen',
    1,
    false,
];
arr3 = ['Pear', 5 > 7, 9, true, [1, 2]];
console.log('\n\n\n(2) Объединить 3 массива в один и рассортировать данные по типу')
console.log(arr, arr2, arr3);
concatArr(arr, arr2, arr3);