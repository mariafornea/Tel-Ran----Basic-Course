console.log('(1) Функция выводит в консоль типп введенных данных (если это строка + длину строки)');
let typeOfSomeValue = ( simbol ) => {
    return (
        typeof simbol == 'string' 
          ? console.log(`${simbol}:`, typeof simbol, ',', simbol.length, 'characters')
           : (typeof simbol == 'number') || (typeof simbol == 'boolean')
            ? console.log(`${simbol}:`, typeof simbol, ',', String(simbol).length, 'characters')
             : console.log(`${simbol} - invalid data type`)  
    );
}
typeOfSomeValue('Stephen King');
typeOfSomeValue(10 > 5);
typeOfSomeValue(null);
typeOfSomeValue(14);
typeOfSomeValue('The Midnight Club');


console.log('(2) Преобразовать функцию из первой задачи в декларативную и функциональное выражение.')

console.log('Декларативная функция --->')
function typeOfSomeValueD ( simbol ) {
    return (
        typeof simbol == 'string' 
          ? console.log(`${simbol}:`, typeof simbol, ',', simbol.length, 'characters')
           : (typeof simbol == 'number') || (typeof simbol == 'boolean')
            ? console.log(`${simbol}:`, typeof simbol, ',', String(simbol).length, 'characters')
             : console.log(`${simbol} - invalid data type`)  
    );
}
console.log(typeOfSomeValueD);

console.log('Функциональное выражение --->')
let typeOfSomeValueE = function ( simbol ) {
    return (
        typeof simbol == 'string' 
          ? console.log(`${simbol}:`, typeof simbol, ',', simbol.length, 'characters')
           : (typeof simbol == 'number') || (typeof simbol == 'boolean')
            ? console.log(`${simbol}:`, typeof simbol, ',', String(simbol).length, 'characters')
             : console.log(`${simbol} - invalid data type`)  
    );
}
console.log(typeOfSomeValueE);
console.log('Я выбрала стрелочную функцию в 1 задании, т.к. мне нужно принять какие-то данные и вернуть уже обработанный результат. Эта функция не требует дополнений, ее не нужно переписывать и я могу повторно использовать ее для этой задачи. Ну или как вы говорили, отправить ее в черный ящик(отдельный файл) пока она мне не понадобится. Ну и мне просто нравятся стрелочные функции)');