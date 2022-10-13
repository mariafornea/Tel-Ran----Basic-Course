console.log('(1) Четные числа от 2 до 20: ');
for (let l = 2; l <= 20; l++) {
    if (l % 2 == 0) {
        console.log(l);
    } 
}
console.log('(2) Заменить цикл For на While');
console.log('---FOR---')
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
  }
console.log('---WHILE---')
let j = 0;
while (j < 3) {
    console.log( `number ${j}!` );
    j++;
}