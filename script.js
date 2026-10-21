
/* =========================================
   RORE ROLL — DELIVERY
   Carrinho, faixa mobile e pedidos WhatsApp
========================================= */

const WHATSAPP_NUMBER = "5515992025858";

const COUPON_CODE = "RORE20";
const COUPON_PERCENT = 10;
const COUPON_MINIMUM = 40;

let couponApplied = false;

const products = [
  // BIG HOTS
   
{
  id: 24,
  name: "Big Hot Doritos – 10 unidades",
  category: "hot",
  price: 34.99,
  description: "Hot rolls crocantes, recheados com cream cheese Philadelphia e finalizados com Doritos triturado, trazendo uma combinação irresistível de cremosidade, crocância e sabor marcante.",
  image: "bighotdoritos.jpeg",
  badge: "LANÇAMENTO"
},
  {
    id: 1,
    name: "Big Hot Tradicional",
    category: "hot",
    price: 42.90,
    description: "Salmão fresco ou grelhado, cream cheese Philadelphia, cebolinha, gergelim e molho tarê Sakura. O clássico que conquista: crocante por fora, cremoso por dentro e com a combinação perfeita de sabores!",
    image: "bighottradicional.jpg"
  },
  {
    id: 2,
    name: "Big Hot Doritos",
    category: "hot",
    price: 45.90,
    description: "Salmão fresco ou grelhado, cream cheese Philadelphia, crocância irresistível de Doritos, cebolinha, gergelim e molho tarê Sakura. Crocante por fora, cremoso por dentro e com o sabor inconfundível de Doritos!",
    image: "bighotdoritos.jpg"
  },
  {
    id: 3,
    name: "Big Hot Shimeji",
    category: "hot",
    price: 49.90,
    description: "Salmão fresco ou grelhado, cream cheese Philadelphia, shimeji selecionado, cebolinha, gergelim e molho tarê Sakura. A combinação perfeita do salmão com o sabor marcante do shimeji, em uma versão crocante e irresistível!",
    image: "bighotshimeji.jpg"
  },
  {
    id: 4,
    name: "Big Hot Camarão",
    category: "hot",
    price: 54.90,
    description: "Salmão fresco ou grelhado, camarões selecionados, cream cheese Philadelphia, cebolinha, gergelim e molho tarê Sakura. A combinação perfeita entre a cremosidade do Philadelphia e o sabor marcante do camarão!",
    image: "bighotcamarao.jpg"
  },
  {
    id: 5,
    name: "Big Hot Extreme",
    category: "hot",
    price: 59.90,
    description: "Salmão fresco ou grelhado, cream cheese Philadelphia em dobro, cebolinha, gergelim e molho tarê Sakura. Para os apaixonados por cream cheese!",
    image: "bighotextreme.jpg",
    badge: "Mais cremoso"
  },
  {
    id: 6,
    name: "Big Hot Patê de Salmão",
    category: "hot",
    price: 45.90,
    description: "Salmão fresco ou grelhado, patê de salmão cremoso, cream cheese Philadelphia, cebolinha, gergelim e molho tarê Sakura. Mais cremosidade, mais sabor e a combinação perfeita para quem ama salmão!",
    image: "bighotpatedesalmao.jpg"
  },

  // BURGERS E HOT ROLL
  {
    id: 7,
    name: "Burger Hot (Salmão)",
    category: "hot",
    price: 45.90,
    description: "Salmão grelhado, cream cheese e arroz japonês.",
    image: "burgerhotsalmao.jpg"
  },
  {
    id: 8,
    name: "Burger Hot (Camarão)",
    category: "hot",
    price: 49.90,
    description: "Camarão grelhado, cream cheese e arroz japonês.",
    image: "burgerhotcamarao.jpg"
  },
  {
    id: 9,
    name: "Hot Roll — 10 unidades",
    category: "hot",
    price: 29.90,
    description: "10 hot rolls de salmão fresco, cream cheese Philadelphia e arroz japonês, empanados e fritos.",
    image: "hotroll10.jpg"
  },

  // TEMAKIS FRITOS
  {
    id: 10,
    name: "Temaki Frito Tradicional",
    category: "temaki",
    price: 29.90,
    description: "Temaki frito, aberto e recheado, com casquinha crocante por fora e muito sabor por dentro. Uma combinação irresistível para quem ama sushi frito!",
    image: "temakifritotradicional.jpg"
  },
  {
    id: 11,
    name: "Temaki Frito Filadélfia",
    category: "temaki",
    price: 34.90,
    description: "Temaki aberto, empanado e frito, recheado com salmão e cream cheese, finalizado com gergelim e opção de cebolinha. Crocância por fora, cremosidade por dentro e uma combinação irresistível de sabores em cada mordida!",
    badge: "Mais pedido",
    image: "temakifritofiladelfia.jpg"
  },
  {
    id: 12,
    name: "Temaki Frito Doritos",
    category: "temaki",
    price: 36.90,
    description: "Temaki aberto, empanado e frito, recheado com salmão e cream cheese, finalizado com Doritos crocante para uma combinação irresistível de cremosidade e crocância!",
    image: "temakifritodoritos.jpg"
  },
  {
    id: 13,
    name: "Temaki Frito Extreme Philadelphia",
    category: "temaki",
    price: 38.90,
    description: "Temaki aberto, empanado e frito, recheado com salmão e o dobro de cream cheese Philadelphia. Finalizado com gergelim e opção de cebolinha, para uma experiência ainda mais cremosa e saborosa!",
    badge: "Mais recheado",
    image: "temakifritoextremefiladelfia.jpg"
  },
  {
    id: 14,
    name: "Temaki Recheado Frito Ebi (Camarão)",
    category: "temaki",
    price: 38.90,
    description: "Arroz japonês, camarão, Philadelphia, cebolinha e alga nori.",
    image: "temakifritoebi.jpg"
  },

  // COMBOS
  {
    id: 16,
    name: "Combo Rore Roll",
    category: "combos",
    price: 99.90,
    description: "2 Big Hots + 1 porção de Hot Roll (10 unidades).",
    image: "comborore.jpg"
  },
  {
    id: 17,
    name: "Combo Big Hot Extreme",
    category: "combos",
    price: 129.90,
    description: "2 Big Hot Extreme + escolha de acompanhamento.",
    badge: "Combo especial",
    image: "combobig.jpg",
    options: ["Big Temaki", "Hot Roll — 10 unidades"]
  },
  {
    id: 18,
    name: "Combo Rorec Roll",
    category: "combos",
    price: 110.90,
    description: "Combo Rorec Roll com camarão.",
    image: "combororecamarao.jpg"
  },

  // BEBIDAS
  {
    id: 19,
    name: "Coca-Cola Lata 350 ml",
    category: "bebidas",
    price: 7.00,
    description: "Coca-Cola lata 350 ml, bem gelada.",
    image: "cocacola350.jpg"
  },
  {
    id: 20,
    name: "Sprite Lata 350 ml",
    category: "bebidas",
    price: 7.00,
    description: "Sprite lata 350 ml, bem gelada.",
    image: "sprite350.jpg"
  },
  {
    id: 21,
    name: "Fanta Laranja Lata 350 ml",
    category: "bebidas",
    price: 7.00,
    description: "Fanta Laranja lata 350 ml, bem gelada.",
    image: "fanta350.jpg"
  },
  {
    id: 22,
    name: "Coca-Cola 2 Litros",
    category: "bebidas",
    price: 14.00,
    description: "Coca-Cola garrafa de 2 litros.",
    image: "cocacola2l.jpg"
  },
  {
    id: 23,
    name: "Guaraná 2 Litros",
    category: "bebidas",
    price: 12.00,
    description: "Guaraná garrafa de 2 litros.",
    image: "guarana2l.jpg"
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
              ${product.options.map((option) => `
                <option value="${escapeHTML(option)}">${escapeHTML(option)}</option>
              `).join("")}
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

  $$(".category-tab").forEach((button) => {
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

/* =========================================
   CUPOM DE DESCONTO
========================================= */

function couponDiscount() {
  if (!couponApplied || cartSubtotal() < COUPON_MINIMUM) {
    return 0;
  }

  return Math.round(cartSubtotal() * COUPON_PERCENT) / 100;
}

function cartTotal() {
  return Math.max(0, cartSubtotal() - couponDiscount());
}

function updateCouponDisplay() {
  const discount = couponDiscount();
  const subtotal = cartSubtotal();

  const discountRow = $("#cart-discount-row");

  if (discountRow) {
    discountRow.hidden = discount <= 0;
  }

  if ($("#cart-discount")) {
    $("#cart-discount").textContent = `− ${money(discount)}`;
  }

  if ($("#cart-total")) {
    $("#cart-total").textContent = money(cartTotal());
  }

  const checkoutDiscountRow = $("#checkout-discount-row");

  if (checkoutDiscountRow) {
    checkoutDiscountRow.hidden = discount <= 0;
  }

  if ($("#checkout-discount")) {
    $("#checkout-discount").textContent = `− ${money(discount)}`;
  }

  if ($("#checkout-total")) {
    $("#checkout-total").textContent = money(cartTotal());
  }

  const message = $("#coupon-message");

  if (message && couponApplied && subtotal < COUPON_MINIMUM) {
    message.textContent =
      `O pedido mínimo para este cupom é ${money(COUPON_MINIMUM)}.`;
    message.className = "error";
  }
}

function applyCoupon() {
  const input = $("#coupon-code");
  const message = $("#coupon-message");

  if (!input || !message) return;

  const code = input.value.trim().toUpperCase();

  if (code !== COUPON_CODE) {
    couponApplied = false;
    message.textContent = "Cupom inválido. Confira o código digitado.";
    message.className = "error";
    renderCart();
    return;
  }

  if (cartSubtotal() < COUPON_MINIMUM) {
    couponApplied = false;
    message.textContent =
      `O pedido mínimo para este cupom é ${money(COUPON_MINIMUM)}.`;
    message.className = "error";
    renderCart();
    return;
  }

  couponApplied = true;
  message.textContent =
    `Cupom aplicado! Você economizou ${money(couponDiscount())}.`;
  message.className = "success";

  renderCart();
}

/* =========================================
   FAIXA FIXA "MINHA COMPRA" — CELULAR
========================================= */

function updateMobileCartBar() {
  const bar = $("#mobile-cart-bar");
  const count = $("#mobile-cart-count");
  const total = $("#mobile-cart-total");

  if (!bar) return;

  const quantity = cartQuantity();
  const hasItems = quantity > 0;

  bar.classList.toggle("visible", hasItems);

  bar.setAttribute(
    "aria-label",
    hasItems
      ? `Ver minha compra com ${quantity} ${quantity === 1 ? "item" : "itens"}, total ${money(cartTotal())}`
      : "Minha compra vazia"
  );

  if (count) {
    count.textContent = `${quantity} ${quantity === 1 ? "item" : "itens"}`;
  }

  if (total) {
    total.textContent = money(cartTotal());
  }
}

/* =========================================
   ATUALIZAR CONTEÚDO DO CARRINHO
========================================= */

function renderCart() {
  const itemsContainer = $("#cart-items");
  const emptyMessage = $("#cart-empty");
  const bottom = $("#cart-bottom");
  const count = $("#cart-count");
  const subtotal = $("#subtotal");
  const checkoutSubtotal = $("#checkout-subtotal");

  if (count) {
    count.textContent = cartQuantity();
  }

  if (subtotal) {
    subtotal.textContent = money(cartSubtotal());
  }

  if (checkoutSubtotal) {
    checkoutSubtotal.textContent = money(cartSubtotal());
  }

  const hasItems = cart.length > 0;

  if (emptyMessage) {
    emptyMessage.hidden = hasItems;
  }

  if (bottom) {
    bottom.hidden = !hasItems;
  }

  if (itemsContainer) {
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

  updateCouponDisplay();
  updateMobileCartBar();
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

  if (checkoutTotal) {
    checkoutTotal.textContent = money(cartSubtotal());
  }

  updateCouponDisplay();
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

  if (changeInput) {
    changeInput.required = needsChange;
  }
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
    `*Subtotal dos produtos: ${money(cartSubtotal())}`
  );

  if (couponDiscount() > 0) {
    lines.push(
      `*Cupom aplicado: ${COUPON_CODE}*`,
      `*Desconto (${COUPON_PERCENT}%): -${money(couponDiscount())}*`
    );
  }

  lines.push(
    `*Total dos produtos: ${money(cartTotal())}`,
    "",
    "*TAXA DE ENTREGA: A CONFIRMAR*",
    "A equipe da Rore Roll vai verificar o endereço e informar o valor do frete.",
    "O total final do pedido será confirmado pela loja antes da confirmação do pedido.",
    "",
    `*Forma de pagamento:* ${customer.payment}`
  );

  if (customer.payment === "Dinheiro") {
    lines.push(`Troco para: ${customer.change || "Não informado"}`);
  }

  if (customer.notes) {
    lines.push("", `Observações: ${customer.notes}`);
  }

  lines.push(
    "",
    "Por favor, me informe o valor do frete e o total final do pedido.",
    "Obrigado!"
  );

  const message = lines.join("\n");

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

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

  const categoryButton = event.target.closest(".category-tab");

  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
  }
});

// CUPOM
$("#apply-coupon")?.addEventListener("click", applyCoupon);

$("#coupon-code")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    applyCoupon();
  }
});

// BUSCA
$("#search-input")?.addEventListener("input", renderProducts);

// ABRIR CARRINHO PELO CABEÇALHO
$("#open-cart")?.addEventListener("click", openCart);

// ABRIR CARRINHO PELA FAIXA FIXA NO CELULAR
$("#mobile-cart-bar")?.addEventListener("click", openCart);

// FECHAR CARRINHO
$("#close-cart")?.addEventListener("click", closeCart);
$("#cart-overlay")?.addEventListener("click", closeCart);

// FINALIZAÇÃO DO PEDIDO
$("#go-checkout")?.addEventListener("click", openCheckout);
$("#close-checkout")?.addEventListener("click", closeCheckout);

$("#checkout-overlay")?.addEventListener("click", (event) => {
  if (event.target === $("#checkout-overlay")) {
    closeCheckout();
  }
});

// PAGAMENTO
$("#payment")?.addEventListener("change", updateChangeField);

// ENVIAR PEDIDO
$("#checkout-form")?.addEventListener("submit", submitOrder);

// BOTÃO DE COMBOS
$("#show-combos")?.addEventListener("click", () => {
  setCategory("combos");
  $("#cardapio")?.scrollIntoView({ behavior: "smooth" });
});

// FECHAR COM ESC
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
