// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {

        if (id == products[i].id) {

            cartList.push(products[i]);
            console.log(products[i].id)
        }
    }
    console.log(cartList)

    calculateTotal();
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    let suma = 0;

    for (let i = 0; i < cartList.length; i++) {

        suma += cartList[i].price;
    }
    console.log(suma)
    return suma
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    cart = [];
    
    for (indice in cartList) {

        let encontrado = buscar(cartList[indice].id);

        if(encontrado == -1) {

            cart.push(cartList[indice]);
            cart[cart.length-1].cantidad = 1
            cart[cart.length-1].subtotal = cart[cart.length-1].cantidad * cart[cart.length-1].price;

        } else {

            cart[encontrado].cantidad += 1; 
            cart[encontrado].subtotal = cart[encontrado].cantidad * cart[encontrado].price;
        }
    } 
    applyPromotionsCart();
    console.log(cart)
}

function buscar(varTemp) {

    let posicion = -1;

    for (i in cart) {

        if(cart[i].id == varTemp)
        
            posicion = i;     
        }
    return posicion;
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    let aceite1;
    let pastel1;

    for (x in cart) {

        if((cart[x].id == 1) && (cart[x].cantidad >= 3)) {

            let cantOil = cart[x].cantidad;
            let descOil = 0.5 * cantOil;

            let swdOil = cart[x].subtotal - descOil;

            cart[x].subtotalWithDiscount = swdOil;

            aceite1 = cart[x].subtotal;
        }

        if((cart[x].id == 3) && (cart[x].cantidad >= 10)) {

            let cantPastel = cart[x].cantidad;
            let descPastel = (cantPastel / 3) * 2;

            let subPastel = cantPastel * cart[x].price;
            let swdPastel = cart[x].subtotal - descPastel;

            cart[x].subtotalWithDiscount = Number(swdPastel.toFixed(2));

            pastel2 = cart[x].subtotalWithDiscount;
        }
    }
    return (aceite1, pastel1)
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    generateCart();

    let descuento = 0;

    document.getElementById("cart_list").innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        let SubPrecio = cart[i].subtotalWithDiscount;
        let precioTot = 0;
        let precioTotSub = 0;
        let lineaPrecio;


        if (SubPrecio > 0) {
            precioTotSub = cart[i].subtotalWithDiscount;
            precioTot = cart[i].subtotal;
            lineaPrecio = `<td style="color:green">$${precioTot} -> $${precioTotSub}</td>`
            descuento = cart[i].subtotal - cart[i].subtotalWithDiscount;
        } else {
            precioTot = cart[i].subtotal;
            lineaPrecio = `<td>$${precioTot}</td>`
        }
        
        let linea = `<tr>
        <th scope="row">${cart[i].name}</th>
        <td>$${cart[i].price}</td>
        <td>${cart[i].cantidad}</td>
        ${lineaPrecio}
        </tr>`;

        document.getElementById("cart_list").innerHTML += linea
    }
    document.getElementById("total_price").innerHTML = calculateTotal() - descuento;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}