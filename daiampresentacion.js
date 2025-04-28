const cart = [];
  const cartItemsEl = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  const cartCountEl = document.getElementById("cart-count");

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }
      updateCartUI();
    });
  });

  function updateCartUI() {
    cartItemsEl.innerHTML = "";
    let total = 0;
    let count = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}`;
      cartItemsEl.appendChild(li);
      total += item.price * item.qty;
      count += item.qty;
    });
    cartTotalEl.textContent = total.toFixed(2);
    cartCountEl.textContent = count;
  }

  // Modal logic
  const cartIcon = document.getElementById("cart-icon");
  const cartModal = document.getElementById("cart-modal");
  const closeModal = document.querySelector(".close-button");

  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == cartModal) {
      cartModal.style.display = "none";
    }
  });
