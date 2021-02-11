const k = 1
const bill = [3, 10, 2, 9]
const b = 7

function bonAppetit(bill, k, b) {
    let newBill = bill
    newBill[k] = 0
    const soma = newBill.reduce((acc, val) => acc + val, 0)/2
    if(b === soma){
        console.log('Bon Appetit')
    } else {
        console.log(b - soma)
    }
}

bonAppetit(bill, k, b)