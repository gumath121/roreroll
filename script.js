
/* =========================================
   RORE ROLL — DELIVERY
   Carrinho e pedidos pelo WhatsApp
========================================= */

const WHATSAPP_NUMBER = "5515992025858";

const products = [
  // HOTS E BURGERS
  {
    id: 1,
    name: "Big Hot",
    category: "hot",
    price: 42.90,
    description: "Salmão fresco, cream cheese Philadelphia e cheiro verde.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Big Hot Salmão Especial",
    category: "hot",
    price: 45.90,
    description: "Mais salmão, cream cheese Philadelphia, cheiro verde e arroz japonês.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Big Hot Shimeji",
    category: "hot",
    price: 49.90,
    description: "Salmão fresco, shimeji, cream cheese Philadelphia, cheiro verde e arroz japonês.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Big Hot Camarão",
    category: "hot",
    price: 54.90,
    description: "Salmão fresco, camarão, cream cheese Philadelphia, cheiro verde e arroz japonês.",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Big Hot Extreme",
    category: "hot",
    price: 59.90,
    description: "Salmão fresco, muito cream cheese Philadelphia, cheiro verde e arroz japonês.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Burger Hot (Salmão)",
    category: "hot",
    price: 45.90,
    description: "Salmão grelhado, cream cheese e arroz japonês.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Burger Hot (Camarão)",
    category: "hot",
    price: 49.90,
    description: "Camarão grelhado, cream cheese e arroz japonês.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Hot Roll — 10 unidades",
    category: "hot",
    price: 29.90,
    description: "10 hot rolls de salmão fresco, cream cheese Philadelphia e arroz japonês, empanados e fritos.",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80"
  },

  // TEMAKIS RECHEADOS FRITOS
  {
    id: 9,
    name: "Temaki Recheado Frito Tradicional",
    category: "temaki",
    price: 29.90,
    description: "Arroz japonês, salmão, cream cheese, cebolinha e alga nori.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Temaki Recheado Frito de Salmão e Philadelphia",
    category: "temaki",
    price: 34.90,
    description: "Arroz japonês, salmão, Philadelphia, cebolinha e alga nori.",
    badge: "Mais pedido",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Temaki Recheado Frito Doritos",
    category: "temaki",
    price: 36.90,
    description: "Arroz japonês, salmão, Philadelphia, cebolinha, Doritos crocante e alga nori.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Temaki Recheado Frito Ebi (Camarão)",
    category: "temaki",
    price: 38.90,
    description: "Arroz japonês, camarão, Philadelphia, cebolinha e alga nori.",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Temaki Recheado Frito Extreme",
    category: "temaki",
    price: 38.90,
    description: "Arroz japonês, salmão, Philadelphia, cebolinha, alga nori e camada extra de Philadelphia.",
    badge: "Mais recheado",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },

  // COMBOS
  {
    id: 14,
    name: "Combo Rorec Roll",
    category: "combos",
    price: 110.90,
    description: "2 Big Hots de camarão + 1 porção de Hot Roll (10 unidades).",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Combo Rore Roll",
    category: "combos",
    price: 99.90,
    description: "2 Big Hots + 1 porção de Hot Roll (10 unidades).",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Combo Big Hot Extreme",
    category: "combos",
    price: 129.90,
    description: "2 Big Hot Extreme + escolha de acompanhamento.",
    badge: "Combo especial",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80",
    options: ["Big Temaki", "Hot Roll — 10 unidades"]
  }
];

let cart = [];
let activeCategory = "todos";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

/* =========================================
   PRODUTOS
========================================= */

function renderProducts() {
  const grid = $("#product-grid");
  if (!grid) return;

  const search = ($("#search-input")?.value || "")
    .trim()
    .toLocaleLowerCase("pt-BR");

  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "todos" ||
      product.category === activeCategory;

    const matchesSearch =
      `${product.name} ${product.description}`
        .toLocaleLowerCase("pt-BR")
        .includes(search);

    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="no-products">
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro nome ou escolha uma categoria diferente.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >
        ${product.badge
          ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
          : ""}
      </div>

      <div class="product-info">
        <h3>${escapeHTML(product.name)}</h3>
        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>

        ${product.options ? `
          <div class="form-group product-option">
            <label for="option-${product.id}">Acompanhamento</label>
            <select id="option-${product.id}">
              <option value="Big Temaki">Big Temaki</option>
              <option value="Hot Roll — 10 unidades">Hot Roll — 10 unidades</option>
            </select>
          </div>
        ` : ""}

        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button
            class="add-to-cart"
            type="button"
            data-add="${product.id}"
            aria-label="Adicionar ${escapeHTML(product.name)} ao carrinho"
            title="Adicionar ao carrinho"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");
}

function setCategory(category) {
  activeCategory = category;

  $$(".category-button").forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderProducts();
}

/* =========================================
   CARRINHO
========================================= */

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  let option = "";

  if (product.options) {
    const select = $(`#option-${product.id}`);
    option = select?.value || product.options[0];
  }

  const cartKey = option
    ? `${product.id}-${option}`
    : String(product.id);

  const existing = cart.find((item) => item.key === cartKey);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      key: cartKey,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      option
    });
  }

  renderCart();
  openCart();
}

function changeQuantity(key, amount) {
  const item = cart.find((product) => product.key === key);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.key !== key);
  }

  renderCart();
}

function removeFromCart(key) {
  cart = cart.filter((item) => item.key !== key);
  renderCart();
}

function cartSubtotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
  const itemsContainer = $("#cart-items");
  const emptyMessage = $("#cart-empty");
  const bottom = $("#cart-bottom");
  const count = $("#cart-count");
  const subtotal = $("#subtotal");
  const checkoutSubtotal = $("#checkout-subtotal");

  if (!itemsContainer) return;

  if (count) count.textContent = cartQuantity();

  if (subtotal) subtotal.textContent = money(cartSubtotal());

  if (checkoutSubtotal) {
    checkoutSubtotal.textContent = money(cartSubtotal());
  }

  const hasItems = cart.length > 0;

  if (emptyMessage) emptyMessage.hidden = hasItems;
  if (bottom) bottom.hidden = !hasItems;

  itemsContainer.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div>
        <h3>${escapeHTML(item.name)}</h3>
        ${item.option
          ? `<p class="product-description">Acompanhamento: ${escapeHTML(item.option)}</p>`
          : ""}
        <div class="cart-item-price">
          ${money(item.price * item.quantity)}
        </div>

        <div class="cart-item-controls">
          <button
            class="quantity-button"
            type="button"
            data-decrease="${escapeHTML(item.key)}"
            aria-label="Diminuir quantidade"
          >−</button>

          <span class="quantity-value">${item.quantity}</span>

          <button
            class="quantity-button"
            type="button"
            data-increase="${escapeHTML(item.key)}"
            aria-label="Aumentar quantidade"
          >+</button>

          <button
            class="remove-item"
            type="button"
            data-remove="${escapeHTML(item.key)}"
          >Remover</button>
        </div>
      </div>
    </div>
  `).join("");
}

/* =========================================
   ABRIR E FECHAR CARRINHO
========================================= */

function openCart() {
  $("#cart-overlay")?.classList.add("active");
  $("#cart-drawer")?.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  $("#cart-overlay")?.classList.remove("active");
  $("#cart-drawer")?.classList.remove("active");

  if (!$("#checkout-overlay")?.classList.contains("active")) {
    document.body.classList.remove("no-scroll");
  }
}

function openCheckout() {
  if (!cart.length) {
    alert("Adicione pelo menos um produto antes de finalizar o pedido.");
    return;
  }

  closeCart();
  $("#checkout-overlay")?.classList.add("active");
  document.body.classList.add("no-scroll");

  const checkoutTotal = $("#checkout-subtotal");
  if (checkoutTotal) checkoutTotal.textContent = money(cartSubtotal());
}

function closeCheckout() {
  $("#checkout-overlay")?.classList.remove("active");

  if (!$("#cart-drawer")?.classList.contains("active")) {
    document.body.classList.remove("no-scroll");
  }
}

/* =========================================
   PAGAMENTO E TROCO
========================================= */

function updateChangeField() {
  const payment = $("#payment");
  const changeField = $("#change-field");

  if (!payment || !changeField) return;

  const needsChange = payment.value === "Dinheiro";
  changeField.hidden = !needsChange;

  const changeInput = changeField.querySelector("input");
  if (changeInput) changeInput.required = needsChange;
}

/* =========================================
   ENVIAR PEDIDO PELO WHATSAPP
========================================= */

function submitOrder(event) {
  event.preventDefault();

  if (!cart.length) {
    alert("Seu carrinho está vazio.");
    closeCheckout();
    return;
  }

  const form = $("#checkout-form");
  if (!form || !form.reportValidity()) return;

  const formData = new FormData(form);

  const customer = {
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    neighborhood: String(formData.get("neighborhood") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    reference: String(formData.get("reference") || "").trim(),
    payment: String(formData.get("payment") || "").trim(),
    change: String(formData.get("change") || "").trim(),
    notes: String(formData.get("notes") || "").trim()
  };

  const lines = [
    "*🍣 NOVO PEDIDO — RORE ROLL*",
    "",
    "*DADOS DO CLIENTE*",
    `Nome: ${customer.name}`,
    `Telefone: ${customer.phone}`,
    "",
    "*ENDEREÇO DE ENTREGA*",
    `Bairro: ${customer.neighborhood}`,
    `Endereço: ${customer.address}`,
    `Referência: ${customer.reference || "Não informada"}`,
    "",
    "*PEDIDO*"
  ];

  cart.forEach((item) => {
    lines.push(
      `${item.quantity}x ${item.name}` +
      (item.option ? ` (Acompanhamento: ${item.option})` : "") +
      ` — ${money(item.price * item.quantity)}`
    );
  });

  lines.push(
    "",
    `*Subtotal dos produtos: ${money(cartSubtotal())}`,
    "Taxa de entrega: confirmar com a loja.",
    "",
    `*Pagamento:* ${customer.payment}`
  );

  if (customer.payment === "Dinheiro") {
    lines.push(`Troco para: ${customer.change}`);
  }

  if (customer.notes) {
    lines.push("", `Observações: ${customer.notes}`);
  }

  lines.push("", "Aguardo a confirmação do pedido. Obrigado!");

  const message = lines.join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================
   EVENTOS
========================================= */

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    return;
  }

  const increaseButton = event.target.closest("[data-increase]");
  if (increaseButton) {
    changeQuantity(increaseButton.dataset.increase, 1);
    return;
  }

  const decreaseButton = event.target.closest("[data-decrease]");
  if (decreaseButton) {
    changeQuantity(decreaseButton.dataset.decrease, -1);
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    removeFromCart(removeButton.dataset.remove);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
  }
});

$("#search-input")?.addEventListener("input", renderProducts);

$("#open-cart")?.addEventListener("click", openCart);
$("#close-cart")?.addEventListener("click", closeCart);
$("#cart-overlay")?.addEventListener("click", closeCart);

$("#go-checkout")?.addEventListener("click", openCheckout);
$("#close-checkout")?.addEventListener("click", closeCheckout);

$("#checkout-overlay")?.addEventListener("click", (event) => {
  if (event.target === $("#checkout-overlay")) {
    closeCheckout();
  }
});

$("#payment")?.addEventListener("change", updateChangeField);

$("#checkout-form")?.addEventListener("submit", submitOrder);

$("#show-combos")?.addEventListener("click", () => {
  setCategory("combos");
  $("#cardapio")?.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeCheckout();
  }
});

/* =========================================
   INICIALIZAÇÃO
========================================= */

renderProducts();
renderCart();
updateChangeField();
