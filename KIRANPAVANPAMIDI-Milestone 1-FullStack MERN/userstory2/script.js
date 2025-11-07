const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");

async function fetchProducts() {
  try {
    productList.innerHTML = "<p>Loading products...</p>";
    const response = await fetch("products.json");
    const products = await response.json();
    renderProducts(products);

    categoryFilter.addEventListener("change", () => {
      const selected = categoryFilter.value;
      const filtered = selected === "all"
        ? products
        : products.filter(p => p.category === selected);
      renderProducts(filtered);
    });
  } catch (error) {
    productList.innerHTML = "<p>Error loading products!</p>";
    console.error(error);
  }
}

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5>${p.name}</h5>
          <p>${p.category}</p>
          <p>Rs${p.price}</p>
        </div>
      </div>`;
    productList.appendChild(card);
  });
}

fetchProducts();
