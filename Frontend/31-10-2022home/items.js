// 1) Описываю 2 объекта - один содержит свойства, другой нет. Просто для проверки условия.

const bestSeries = {
    name: ['Outlander', 'The Midnight Club', 'The Haunting of Hill House'],
    seasons: ['5', '1', '1'],
    producer: ['David Brown',  'Mike Flanagan', 'Mike Flanagan'],
    info() {
        for (let i = 0; i < bestSeries.name.length; i++) {
            console.log("'" + this.name[i] + "' - " + this.seasons[i] + ' seasons, producer - ' + this.producer[i] + '.');
        }
    }
}

const voidObject = {};


// Функция для подсчета свойств объекта
let countProperties = (obj) => {
    if (Object.keys(obj).length === 0) {
        return 'null';
    } 
    else {
        return Object.keys(obj).length;
    }
}

console.log(bestSeries);
console.log('Object size - ' + countProperties(bestSeries)); // Object size - 4
console.log(voidObject);
console.log('Object size - ' + countProperties(voidObject)); // Object size - null







// 2)

const salaries = {
    'Elisabeth' : 5000,
    'Steve' : 5700,
    'John' : 4800,
    'Dugal' : 6000,
    'Claire' : 6400,
    'Jammie' : 8100
}

const voidSalaries = {};


let highestPaidEmployee = (obj) => {
    let maxSalary = 0;
    let maxName = null;
    if (Object.keys(obj).length === 0) {
        return 'null';
    }
    else {
        for(const [name, salary] of Object.entries(salaries)) { 
            if (maxSalary < salary) {
              maxSalary = salary;
              maxName = name;
            }
          }
        
          return ('The highest paid employee is ' + maxName);
    }
}
console.log(highestPaidEmployee(salaries));
console.log(highestPaidEmployee(voidSalaries));

 /* Для второй задачи, честно говоря, я нашла решение в интернете. Я пыталась сделать это через for, for in, но не получалось. Наверное потомучто, я использовала для сравнение obj[i], а это уже массив. Пока не очень разобралась в объектах, так как вынужденно пропустила несколько занятий и сейчас пытаюсь нагнать упущенное. Кстати, мне очень жаль, если я не уложилась в дедлайн. Постараюсь все исправить. Но все же, я пока искала идеи для решения этой задачи, накнулась на что-то подобное: */

 const salaries1 = { // здесь я создаю объект из объектов
    x : {a: 'Elisabeth', b: 5000},
    x : {a: 'Steve', b: 5700},
    x : {a: 'John', b: 4800},
    x : {a: 'Dugal', b: 6000},
    x : {a: 'Claire', b: 6400},
    x : {a: 'Jammie', b: 8100}
}
let topSalary = (obj) => {
    maxS = 0, maxN = null;
    obj.forEach(element => {
        if (element.a.b > maxS) {
            maxS = element.a.b;
            maxN = element.a;
        }
    });
    return maxN;
}
console.log(topSalary(salaries1));