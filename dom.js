let productos = [
    {id: 1,
    nombre: "Coronita 210 mL x6 un",
    precio: 15490,
    img: "./img/coronita.png"
    },

    {id: 2,
    nombre: "Budweiser 250 mL x6 un",
    precio: 12990,
    img: "./img/budweiser.png"
    },

    {id: 3,
    nombre: "Stella Artois 355 mL x6 un",
    precio: 27990,
    img: "./img/stellaArtois.png"
    },

    {id: 4,
    nombre: "Heineken 250 mL x6 un",
    precio: 14490,
    img: "./img/heineken.png"
    }
]

let listProducts = document.getElementById("listaProductos");
let listaCarrito = [];
let btnAgregarAlCarrito = document.getElementById("agregarCarrito");
let btnCarrito = document.getElementById("logo_user");
let tBodyCarrito = document.getElementById("tbodyCarrito");

productos.forEach((producto) => {
    let padre = document.createElement("div");
    padre.classList.add('col');
    let content = document.createElement("div");
    content.classList.add('card');
    content.innerHTML = `<img class="card-img-top" src="${producto.img}">`;
    let description = document.createElement("div");
    description.classList.add("card-body");
    description.innerHTML = `
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${parseFloat(producto.precio)}</p> 
    <button type="button" class="btn btn-success btn-rounded" id="agregarCarrito">Agregar</button>    
    `;
    listProducts.appendChild(padre);
    padre.appendChild(content);
    content.appendChild(description); 
});

const clickButton = document.querySelectorAll(".btn-success");

clickButton.forEach(btn => {
    btn.addEventListener("click", agregarAlCarrito)
});

function agregarAlCarrito(e){
    const button = e.target;
    const item = button.closest(".card");
    const itemTitle = item.querySelector(".card-title").textContent;
    const itemPrice = item.querySelector(".card-text").textContent;
    const itemImg = item.querySelector(".card-img-top").src;

    const newItem = {
        imagen: itemImg,
        nombre: itemTitle,
        precio: itemPrice,
        cantidad: 1
    }

    agregarItemCarrito(newItem);    
}

function agregarItemCarrito(newItem){
    const cant = tBodyCarrito.getElementsByClassName("amount");
    for(let i = 0; i < listaCarrito.length; i++){
        if(listaCarrito[i].nombre.trim() === newItem.nombre.trim()){
            listaCarrito[i].cantidad ++;
            const amount = cant[i];
            amount.innerHTML ++;
            totalCarrito();
            return null;            
        }
    }

    listaCarrito.push(newItem);
    renderCarrito();
}

function renderCarrito(){
    tBodyCarrito.innerHTML = "";  
    listaCarrito.map((product) => {   
        let tr = document.createElement("tr");
        tr.classList.add("itemCarrito");
        let content = `
        <td>
            <div class="d-flex justify-content-center">
            <img
                src="${product.imagen}"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
                />                    
            </div>
        </td>
        <td>
            <div class="d-inline">
            <h6 class="h6">${product.nombre}</h6>
            <p class="card-text" id="priceUnit">${product.precio}</p>
            </div>
        </td>
        <td>
            <div class="text-center">
            <h6 id="amount" class="amount">${product.cantidad}</h6>
            </div>
        </td>
        <td>
            <div>
            <button class="bg-white btn-hover disminuir" id="decrease">-</button>
            <button class="bg-danger btn-hover text-white aumentar" id="increase">+</button>
            </div>  
        </td>
        <td>
            <div class="imagen">
            <button class="delete btn btn danger"><img src="./img/biggarbagebin_121980.png" alt="eliminarProducto"></button>
            </div>
        </td>
        `;
        tr.innerHTML = content;
        tBodyCarrito.appendChild(tr);
        
        tr.querySelector(".delete").addEventListener("click", eliminarProducto);
        tr.querySelector(".aumentar").addEventListener("click", increaseAmount);
        tr.querySelector(".disminuir").addEventListener("click", decreaseAmount);

    });
    totalCarrito();
}

function totalCarrito(){
    let total = 0;
    let p = document.getElementById("total");
    listaCarrito.forEach((prod) => {
        let precio = Number(prod.precio.replace("$", ""));
        total = total + precio*prod.cantidad;
    });
    p.innerHTML = `Total $${total}`;
}

function eliminarProducto(e){
    let btnDelete = e.target;
    let tr = btnDelete.closest(".itemCarrito");
    let nombre = tr.querySelector(".h6").textContent;
    for(let i = 0; i < listaCarrito.length; i++){
        if(listaCarrito[i].nombre.trim() === nombre.trim()){
            listaCarrito.splice(i, 1);
        }
    }
    tr.remove();
    totalCarrito();
}

function increaseAmount(e){
    let increase = e.target;
    let tr = increase.closest(".itemCarrito");
    let nombre = tr.querySelector(".h6").textContent;
    listaCarrito.forEach(item => {
        if(item.nombre.trim() === nombre.trim()){
            item.cantidad ++;
            renderCarrito();
            totalCarrito();
        }
    });
}

function decreaseAmount(e){
    let increase = e.target;
    let tr = increase.closest(".itemCarrito");
    let nombre = tr.querySelector(".h6").textContent;
    listaCarrito.forEach(item => {
        if(item.cantidad > 1){
            item.cantidad --;
            renderCarrito();
            totalCarrito(); 
        }             
    });
}


buttomDecrease.addEventListener("click", () => {
    if(amountInitial>1){
        amountInitial -= 1;
        updateAmount();        
    }else{
        tbody.innerHTML = "";
        p.innerHTML = "";
    }
});








