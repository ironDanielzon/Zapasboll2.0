document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.getElementById('cart-total');



    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('p').textContent;
        const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
        const productImage = product.querySelector('img').src;

        // Verificar si el producto ya está en el carrito
        const existingCartItem = Array.from(cartList.children).find(item =>
            item.dataset.id === productId
        );

        if (existingCartItem) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const quantitySelect = existingCartItem.querySelector('.quantity-select');
            const currentQuantity = parseInt(quantitySelect.value);
            quantitySelect.value = currentQuantity + 1;

            // Actualizar el precio total del ítem en función de la nueva cantidad
            updateItemTotal({target: quantitySelect});
        } else {
            // Si el producto no está en el carrito, crear un nuevo elemento de lista
            const cartItem = document.createElement('li');
            cartItem.dataset.id = productId;
            cartItem.innerHTML = `
                <img src="${productImage}" height="100px" width="100px" alt="${productName}">
                <span>${productName}</span>
                <select class="quantity-select" style="height: 25px">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <!-- Agrega más opciones según sea necesario -->
                </select>
                <span class="item-total">$${productPrice.toFixed(2)}</span>
                <button class="remove-from-cart-btn" style="height: 50px">Eliminar</button>
            `;

            // Agregar el nuevo elemento al carrito
            cartList.appendChild(cartItem);

            // Actualizar el total del carrito
            updateCartTotal();

            // Agregar evento al combobox en el carrito
            const quantitySelect = cartItem.querySelector('.quantity-select');
            quantitySelect.addEventListener('change', updateItemTotal);

            // Agregar evento al botón "Eliminar" en el carrito
            const removeFromCartButton = cartItem.querySelector('.remove-from-cart-btn');
            removeFromCartButton.addEventListener('click', removeFromCart);
        }
    }

    function updateItemTotal(event) {
        const quantitySelect = event.target;
        const cartItem = quantitySelect.closest('li');
        const productPrice = parseFloat(cartItem.querySelector('.item-total').textContent.replace('$', ''));
        const quantity = parseInt(quantitySelect.value);

        // Actualizar el precio total del ítem en función de la cantidad seleccionada
        const itemTotal = productPrice * quantity;
        cartItem.querySelector('.item-total').textContent = `$${itemTotal.toFixed(2)}`;

        // Actualizar el total del carrito
        updateCartTotal();
    }

    function removeFromCart(event) {
        const cartItem = event.target.closest('li');
        cartItem.remove();

        updateCartTotal();
    }

    function updateCartTotal() {
        const cartItems = cartList.querySelectorAll('li');
        let total = 0;

        cartItems.forEach(item => {
            const itemPrice = parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));
            total += itemPrice;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});