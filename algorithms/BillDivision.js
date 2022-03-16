function bonAppetit(bill, k, b) {
    let totalBill = parseInt(bill.reduce((acc, current) => acc + current), 0)
    let annaBill = (totalBill - bill[k]) / 2
    let annaChange = bill[k] / 2
    
    if (annaBill === b) {
        console.log('Bon Appetit')
    } else {
        console.log(annaChange)
    }
}

bonAppetit([3,10,2,9],1,12)