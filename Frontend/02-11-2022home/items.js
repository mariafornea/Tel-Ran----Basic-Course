// 1)
const person1 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27
}
const person2 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27
}
const person3 = {
    firstName: 'Elisabeth',
    lastName: 'Smith',
    age: 23,
    interests: 'history'
}
const person4 = {
    firstName: 'Claire',
    lastName: 'Randell',
    age: 25
}

function isEqual (obj1, obj2) {
    if (Object.keys(obj1).length === Object.keys(obj2).length) { // сначала проверяю длину объектов
        if (obj1.firstName == obj2.firstName && obj1.lastName == obj2.lastName && obj1.age == obj2.age) { //теперь свойства и значения
            return 'true';
        }
        else {
            return 'false';
        }
    }
    else return 'false';
}

/* function isEqualSimple (obj1, obj2) {
    console.log(Boolean(obj1 == obj2)); 
}
 */
console.log(isEqual(person1, person2));
console.log(isEqual(person1, person3));
/* console.log(isEqualSimple(person1, person2));
console.log(isEqualSimple(person1, person3)); */

// 2) испольую те же объекты (навеное это слишком длинное решение, но хотелось самостоятельно его придумать, в  этот раз без использование интернета. Но оно точно не подойдет в реальной практике, если я не буду точно знать названия свойств объектов. )

function intersection (obj1, obj2) {
    if (obj1.firstName != obj2.firstName && obj1.lastName != obj2.lastName && obj1.age != obj2.age) {
        return '0 intersection';
    }
    else {
        if (obj1.firstName == obj2.firstName && obj1.lastName != obj2.lastName && obj1.age != obj2.age) {
            return ('firstName : ' + ob1.firstName + '\n');
        } else if (obj1.firstName != obj2.firstName && obj1.lastName == obj2.lastName && obj1.age != obj2.age) {
            return ('lastName : ' + obj1.lastName + '\n');
        } else if (obj1.firstName != obj2.firstName && obj1.lastName != obj2.lastName && obj1.age == obj2.age) {
            return ('age : ' + obj1.age);
        }
        else if (obj1.firstName == obj2.firstName && obj1.lastName == obj2.lastName && obj1.age != obj2.age) {
            return ('firstName : ' + obj1.age + ', lastName : ' + obj1.lastName + '\n');
        }
        else if (obj1.firstName == obj2.firstName && obj1.lastName != obj2.lastName && obj1.age == obj2.age) {
            return ('firstName : ' + obj1.firstName + ', age : ' + obj1.age + '\n');
        }
        else if (obj1.firstName != obj2.firstName && obj1.lastName == obj2.lastName && obj1.age == obj2.age) {
            return ('lastName : ' + obj1.lastName + ', age : ' + obj1.age + '\n');
        }
        else if (obj1.firstName == obj2.firstName && obj1.lastName == obj2.lastName && obj1.age == obj2.age) {
            return ('firstName : ' + obj1.age + ', lastName : ' + obj1.lastName + ', age : ' + obj1.age + '\n');
        }
    }
}
console.log(intersection(person1, person2));
console.log(intersection(person1, person3));
console.log(intersection(person2, person4));