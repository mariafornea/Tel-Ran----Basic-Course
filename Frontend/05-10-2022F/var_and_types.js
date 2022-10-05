//let box; //создание пустой переменной 
//имя переменной должно отражать то, что она содержит
//let sum = 2 + 2//переменная, которая содержит сумму
//let userName = 'Alex';//переменная, которая содержит имя пользователя
//это и есть семантика, назвать осознанно (соответственно смыслу) = назвать семантически
//let modelAuto = "BMW" //переменная, которая содержит модель автомобиля




/********************************/

/*let box; //undifined type
console.log(box); //способо посмотреть что-то в консоли
box = 3 + 2; //5
console.log(box);
box = 7 + 3; //   значение 5 изменится на 7;
console.log(box);
// let box - слева куда сохранить
// 5 - что сохранить
// = - оператор присвоения*/

/********************************/



/*let string = 'Alex'; //переменная строка
console.log(string);
let string2 = "Alex"; //также переменная строка
console.log(string2);*/


/********************************/

//var oldVar = 123; //var то же самое, что и let, но устаревшиее и небезопасное в плане использования переменной
//console.log(oldVar);

/********************************/

/*let message; //инициализация переменной
console.log(message); //undifined
message = 'Hello'; //присваевается значения
console.log(message);
message = 123; //переписывается значение
console.log(message);
message = 'Привет'; //переписывется значение
console.log(message);*/

/********************************/

/*let user = 'John';
let age = 25;
let message = 'Hello';
console.log(user, age, message);*/

/********************************/

/*let user = 'John';
    age = 25;
    message = 'Hello';
console.log(user, age, message);*/

/********************************/

//ЧЕГО НЕЛЬЗЯ ДЕЛАТЬ

//let 1a; // не может начинаться с цифры
//let my-name; //дефис не разрешен в имени
//let, class, return и function так же недопустимы для имени поскольку это зарезервированные слова
// let let = 5; //нельзя назвать переменную "let", ошибка!
// let retunr = 5; //error


//const myBirthday = '18.04.1982'; //так правильно, это константа, ее нельзя изменить

/********************************/

//НЕСКОЛЬКО ХОРОШИХ ПРАВИЛ

//1.Используйте легко читаемые имена 
//2.Избегайте использования аббревиатур или коротких имен, таких как a, b, c
//3.Делайте имена максимально описательными и лаконичными
//Примеры плохих имен: data и value. Такие имена ничего не говорят





/********************************/
 
//В JS есть 8 основных типов данных
//Семь из них называют примитивными:

//1)number для любых чисел
//const number1 = 55;
//const number2 = 55.53;

//let firstNumber = 50;
//let secondNumber = 10;
//let sum = firstNumber + secondNumber;
//console.log(sum); //60

//let firstNumber; //type undifined, value indifined
//let secondNumber = 10;
//let sum = firstNumber + secondNumber;
//console.log(sum); // NaN (Not a Number)

//2)bigint для целых чисел огромной длины
//сивол n в конце означает, что это bigint
//const bigint = 1234678874325678976534688765356n;

//3)string для строк. Строка может содержать ноль или больше символов
// '' - длина строки 0 символов
// 'abc' - длина строки 3 символа

//4)boolean для true/false
//let isLoginUser = false;
//isLoginUser = true;

//5)null для неизвестных значений - отдельный тип, имеющий одно значение - null

//6)undifined для неприсвоенных значений - отдельный тип, имеющий одно значение - undifined

//7)symbol для уникальных идентификаторов

//И один не является примитивным и стоит особняком:
//8)object для более сложных структур

//Операторр typeof позволяет увидеть, какой тип данных сохранен в переменных
/*let user;
let notResponce = null;
let obj = {};
const message = 'Hello, world!';
let isLogin = false;
const pi = 3.14;
console.log(typeof pi);*/

//Имеет две формы typeof x и typeof(x);
/* pi = 3.14;
let isLogin = false;
let piType = typeof pi;
let isLoginType = typeof isLogin;
console.log(piType, isLoginType);*/

//Возвращает строку с именем типа. Например, 'string'
//Для null возвращает object - это ошибка в языке
// notResponce = null;
//console.log(typeof notResponce); //object


/********************************/

//КОНВЕРТАЦИЯ ТИПОВ ДАННЫХ

//Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое

//1)Строковое - Происходит, когда нам нужно что-то вывести
//Может быть вызвано с помощью

//const pi = 3.14;
//const piString = String(pi);
//console.log(piString, pi);

//let hello = 'Hello';
//let world = 'World';
//console.log(hello + ' ' + world + '!'); //это склеивание
//Для примитивных значений работает очевидным образом

//2)Численное - Происходит в математических операциях
//Может быть вызвано с помощью Number(value);

//const piString = '3.14';
//const piNumber = Number(piString);
//console.log(piString, piNumber);

//3)Логическое - Происходит в логических операциях
//Может быть вызвано с помщью Boolean(value)

/*console.log(Boolean(3.14)); //true
console.log(Boolean(-3.14)); //true
console.log(Boolean(0)); //false
console.log(Boolean('undifined')); //true
console.log(Boolean('')); //false /Полезно для проверки является ли строка пустой*/

//Boolean

//undifined == false;
//null == false;
//'' == false;
//0 == false;

//{} == true;
// 'Hello, world!' == true;
// 3.14 == true;
// -5 == true;



