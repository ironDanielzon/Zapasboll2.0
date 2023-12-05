let comprar = document.getElementById("comprar");

let cartTotal = document.getElementById("cart-total");

let cartList = document.querySelector('.cart-list');

comprar.onclick = function () {
    cartTotal.innerText = '0.00';

    cartList.innerHTML = '';

    alert("Compra Finalizada");
};
