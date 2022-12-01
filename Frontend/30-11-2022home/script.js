let priceF = 0;
let amountF = 0;
function addProduct (id) {
    priceF = priceF + document.getElementById('price').value * document.getElementById('amount').value;
    amountF = Math.floor(amountF) + Math.floor(document.getElementById('amount').value);
    let str1 = `Общая сумма : ${priceF}`;
    let str2 = `Общее колличество : ${amountF}`;
    document.getElementById('priceFinish').innerText = str1;
    document.getElementById('amountFinish').innerText = str2;
    let Elem = document.getElementById('name').value + "\n" + document.getElementById('price').value + "\n" + `${document.getElementById('price').value} x ${document.getElementById('amount').value} = ` + document.getElementById('price').value * document.getElementById('amount').value;
    document.getElementById(id).innerText = Elem;
}
let count = 0;
function switchPlace () {
    count = count + 1;
    switch(count) {
        case 1 : addProduct('box-2'); break;
        case 2 : addProduct('box-3'); break;
        case 3 : addProduct('box-4'); break;
        case 4 : addProduct('box-5'); break;
        case 5 : addProduct('box-6'); break;
        case 6 : addProduct('box-7'); break;
    }
}