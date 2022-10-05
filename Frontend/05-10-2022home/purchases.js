const allMoney = 100;
const tomatoPrice = 10;
const cucumberPrice = 5;
const applePrice = 15;
let vegAndFruits = tomatoPrice * 2 + cucumberPrice * 2 + applePrice * 2;
let nuts = allMoney - vegAndFruits;
console.log("Paid for fruits and vegetables: " + vegAndFruits);
console.log("Paid for nuts: " + nuts);
console.log(vegAndFruits + ' > ' + nuts + ' =', vegAndFruits > nuts);
if (vegAndFruits > nuts) {
    console.log("Spend more on fruits and vegetables");
}
else {
    console.log("Spend more on nuts");
}