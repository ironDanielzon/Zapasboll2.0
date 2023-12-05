// Esperar a que el DOM esté completamente cargado
$(document).ready(function() {
    const cartList = $('.cart-list');
    const cartTotal = $('#cart-total');

    // Delegación de eventos para los botones "Agregar al carrito"
    $(document).on('click', '.add-to-cart-btn', addToCart);

    // Delegación de eventos para el cambio en los selectores de cantidad
    $(document).on('change', '.quantity-select', updateItemTotal);

    // Delegación de eventos para los botones "Eliminar" en el carrito
    $(document).on('click', '.remove-from-cart-btn', removeFromCart);

    function addToCart(event) {
        const product = $(event.target).closest('.product');
        const productId = product.data('id');
        const productName = product.find('p').text();
        const productPrice = parseFloat(product.find('.price').text().replace('$', ''));
        const productImage = product.find('img').attr('src');

        // Verificar si el producto ya está en el carrito
        const existingCartItem = cartList.find(`li[data-id="${productId}"]`);

        if (existingCartItem.length) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const quantitySelect = existingCartItem.find('.quantity-select');
            const currentQuantity = parseInt(quantitySelect.val());
            quantitySelect.val(currentQuantity + 1);

            // Actualizar el precio total del ítem en función de la nueva cantidad
            updateItemTotal({ target: quantitySelect });
        } else {
            // Si el producto no está en el carrito, crear un nuevo elemento de lista
            const cartItem = $(`
            <li data-id="${productId}">
              <img src="${productImage}" height="100px" width="100px" alt="${productName}">
              <span>${productName}</span>
              <select class="quantity-select" style="height: 25px">
                ${generateQuantityOptions()}
              </select>
              <span class="item-total">$${productPrice.toFixed(2)}</span>
              <button class="remove-from-cart-btn" style="height: 50px">Eliminar</button>
            </li>
          `);

            // Agregar el nuevo elemento al carrito
            cartList.append(cartItem);

            // Actualizar el total del carrito
            updateCartTotal();
        }
    }

    function updateItemTotal(event) {
        const quantitySelect = $(event.target);
        const cartItem = quantitySelect.closest('li');
        const productPrice = parseFloat(cartItem.find('.item-total').text().replace('$', ''));
        const quantity = parseInt(quantitySelect.val());

        // Actualizar el precio total del ítem en función de la cantidad seleccionada
        const itemTotal = productPrice * quantity;
        cartItem.find('.item-total').text(`$${itemTotal.toFixed(2)}`);

        // Actualizar el total del carrito
        updateCartTotal();
    }

    function removeFromCart(event) {
        const cartItem = $(event.target).closest('li');
        cartItem.remove();

        updateCartTotal();
    }

    function updateCartTotal() {
        const cartItems = cartList.find('li');
        let total = 0;

        cartItems.each(function() {
            const itemPrice = parseFloat($(this).find('.item-total').text().replace('$', ''));
            total += itemPrice;
        });

        cartTotal.text(total.toFixed(2));
    }

    function generateQuantityOptions() {
        let options = '';
        for (let i = 1; i <= 10; i++) {
            options += `<option value="${i}">${i}</option>`;
        }
        return options;
    }
});