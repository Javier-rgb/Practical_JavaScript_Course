// variables

// price = 120;
// discount = 18;

// finalPrice = (price * (100 - discount)) / 100;

function applyDiscount(price, discount){
    return (price * (100 - discount)) / 100;
}

// finalPrice = applyDiscount(price, discount)

// console.log({
//     price, discount, finalPrice,
// });

function applyDiscount_JS(){
    priceID = document.getElementById("priceInput");
    price = priceID.value;

    discountID = document.getElementById("discountInput");
    discount = discountID.value;

    finalPrice = applyDiscount(price, discount);

    resultID = document.getElementById("result");
    resultID.innerText = "El precio con descuento es: $" + finalPrice;
}