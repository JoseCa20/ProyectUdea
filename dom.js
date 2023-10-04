let amountInitial = 1;

let tbody = document.getElementById("tbodyCarrito");
let buttomIncrease = document.getElementById("increase");
let buttomDecrease = document.getElementById("decrease");
let amountTitle = document.getElementById("amount");
let unitPrice = document.getElementById("priceUnit");
let p = document.getElementById("total");

p.innerHTML = `Total: $${unitPrice.innerHTML}`;

function updateAmount(){   
    subtotal(unitPrice.innerHTML, amountInitial); 
    amountTitle.innerHTML = `${amountInitial}`;    
}

buttomIncrease.addEventListener("click", () => {
    amountInitial += 1;
    updateAmount();        
});

buttomDecrease.addEventListener("click", () => {
    if(amountInitial>1){
        amountInitial -= 1;
        updateAmount();        
    }else{
        tbody.innerHTML = "";
        p.innerHTML = "";
    }
});


function subtotal(a, b){
    let sub =  a * b; 
    p.innerHTML = `Total: $${sub}`;   
}






