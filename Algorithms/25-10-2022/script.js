let arr = [-2, 4, [true, false], 'Outlander', null, 25, 5, -4];
let arr2 = ['The Midnight Club', 'Haunting of Hill House', 'Brand New Cherry', [-3, null]];

function searchElemByKey (arr, key) {
    let count = 0;
    let idx = 0;
    arr.forEach(element => {
        if (element === key) {
            idx = arr.indexOf(element);
            count++;
        }
    }); 
    if (count == 0) {
        return (`Could not find element (key = ${key}) : -1`);
    }
    else {
        return (`Search element index (key = ${key}) : ` + idx);
    }
}
console.log('First item --> ');
console.log(arr);
console.log(searchElemByKey(arr, 25));
console.log(arr2);
console.log(searchElemByKey(arr2, 5));



let sortArr = [2, 2, 5, 5, 3, 3, 7, 9, 9, 0, 0];
let sortArr2 = [2, 2, 5, 5, 3, 3, 9, 9, 0, 0];

function searchErrorElem (arr) {
    let i = 0;
    let count = 0;
    while (i < arr.length) {
        if (arr[i] == arr[i+1]) {
            i = i+2;
        }
        else {
            count++;
            return  ('Unique element: ' + arr[i]);
        }
    }
    if(count == 0) {
        return -1;
    }
}

console.log('\n\n\nSecond item --> ');
console.log(sortArr);
console.log(searchErrorElem(sortArr));
console.log(sortArr2);
console.log(searchErrorElem(sortArr2));