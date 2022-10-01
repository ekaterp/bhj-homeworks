const quantityDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const quantityInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productQuantityValue = Array.from(document.querySelectorAll(".product__quantity-value"));

quantityDec.forEach(element => {
    element.addEventListener("click", (e) => {
        if (productQuantityValue[quantityDec.indexOf(element)].textContent > 1) {
            productQuantityValue[quantityDec.indexOf(element)].textContent--;
        }
    });
});

quantityInc.forEach(element => {
    element.addEventListener("click", (e) => {
        productQuantityValue[quantityInc.indexOf(element)].textContent++;
    });
});

const cartProducts = document.querySelector(".cart__products");
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const products = Array.from(document.querySelectorAll(".product"));

productAdd.forEach(element => {
    element.addEventListener("click", (e) => {
        const index = productAdd.indexOf(element);
        const currentCount = productQuantityValue[index].textContent;
        const productId = products[index].getAttribute("data-id");

        const productsInCart = Array.from(cartProducts.querySelectorAll(".cart__product"));
        const clickedProduct = productsInCart.find(element => element.getAttribute("data-id") == productId);

        if (typeof(clickedProduct) == "undefined") {
            newCardProduct = `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${products[index].querySelector("img").getAttribute("src")}">
                    <div class="cart__product-count">${currentCount}</div>
                </div>
                `;
            cartProducts.insertAdjacentHTML("beforeend", newCardProduct);
        } else {
            const newCount = Number(clickedProduct.querySelector(".cart__product-count").textContent) + Number(currentCount);
            clickedProduct.querySelector(".cart__product-count").innerText = newCount;
        }
    });
});