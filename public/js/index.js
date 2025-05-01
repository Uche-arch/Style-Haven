// // frontend/public/js/index.js
// // let allProducts = []; // Store all products globally

// let allProducts = [];
// let allCategories = new Set(); // Use a Set to keep categories unique

// function populateCategoryList() {
//   const categoryList = document.getElementById("category-list");
//   categoryList.innerHTML = "";

//   allCategories.forEach((category) => {
//     const option = document.createElement("option");
//     option.value = category;
//     categoryList.appendChild(option);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetchProducts();
// });

// async function fetchProducts() {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await fetch("http://localhost:8000/api/products", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const products = await res.json();

//     if (res.ok) {
//       allProducts = products;
//       // Collect unique categories
//       products.forEach((product) => {
//         if (product.category) {
//           allCategories.add(product.category);
//         }
//       });

//       allCategories = new Set(["All", ...allCategories]); // Add "All" at the start
//       populateCategoryList(); // Fill datalist
//       displayProducts(products);
//     } else {
//       console.error(
//         "Failed to fetch products:",
//         products.error || "Unknown error"
//       );
//     }
//   } catch (err) {
//     console.error("Failed to load products:", err);
//   }
// }

// function displayProducts(products) {
//   const container = document.getElementById("product-list");
//   container.innerHTML = ""; // clear

//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     card.innerHTML = `
//       <p>${product.category}</p>
//       <img src="${product.image}" alt="${product.name}" />
//       <h3>${product.name}</h3>
//       <p>${product.description.replace(/\n/g, "<br>")}</p>
//       <p>₦${product.price.toLocaleString()}</p>
//       <button onclick='addToCart(${JSON.stringify(
//         product
//       )})'>Add to Cart</button>
//     `;

//     container.appendChild(card);
//   });
// }

// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const exists = cart.find((p) => p._id === product._id);

//   if (exists) {
//     alert("This product is already in your cart!");
//     return;
//   }

//   cart.push({ ...product, quantity: 1 });

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("✅ Product added to cart!");
// }
// // const searchInput = document.getElementById("search-input");

// // searchInput.addEventListener("input", () => {
// //   const query = searchInput.value.toLowerCase();

// //   const filtered = allProducts.filter(
// //     (product) =>
// //       product.name.toLowerCase().includes(query) ||
// //       product.description.toLowerCase().includes(query) ||
// //       product.category.toLowerCase().includes(query)
// //   );

// //   displayProducts(filtered);
// // });

// // const categoryFilter = document.getElementById("category-filter");

// // categoryFilter.addEventListener("input", () => {
// //   const selectedCategory = categoryFilter.value.toLowerCase();

// //   const filtered = allProducts.filter(
// //     (product) => product.category.toLowerCase() === selectedCategory
// //   );

// //   displayProducts(filtered);
// // });

// document.getElementById("category-filter").addEventListener("input", (e) => {
//   const input = e.target.value.trim().toLowerCase();

//   if (!input || input === "all") {
//     displayProducts(allProducts);
//     return;
//   }

//   const filtered = allProducts.filter((product) =>
//     product.category.toLowerCase().includes(input)
//   );

//   displayProducts(filtered);
// });

// frontend/public/js/index.js

// let allProducts = [];
// let allCategories = new Set(); // Use a Set to keep categories unique

// // Function to update the category list with new post counts
// function populateCategoryList() {
//   const categoryList = document.getElementById("category-list");
//   categoryList.innerHTML = "";

//   // Retrieve stored new post counts from localStorage
//   const newCounts = JSON.parse(localStorage.getItem("newCategoryCounts") || "{}");

//   allCategories.forEach((category) => {
//     const option = document.createElement("option");
//     const count = newCounts[category] || 0;
//     option.value = count > 0 ? `${category} (${count} new)` : category;
//     categoryList.appendChild(option);
//   });
// }

// // Function to fetch and load products
// document.addEventListener("DOMContentLoaded", () => {
//   fetchProducts();
// });

// // Function to fetch products from the API
// async function fetchProducts() {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await fetch("http://localhost:8000/api/products", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const products = await res.json();

//     if (res.ok) {
//       allProducts = products;

//       // Collect unique categories and initialize new post counts
//       products.forEach((product) => {
//         if (product.category) {
//           allCategories.add(product.category);
//         }
//       });

//       allCategories = new Set(["All", ...allCategories]); // Add "All" at the start

//       // Initialize new post counts if not already present
//       const newCounts = JSON.parse(localStorage.getItem("newCategoryCounts") || "{}");
//       allCategories.forEach((category) => {
//         if (!newCounts[category]) {
//           newCounts[category] = 0;
//         }
//       });
//       localStorage.setItem("newCategoryCounts", JSON.stringify(newCounts));

//       populateCategoryList(); // Fill datalist
//       displayProducts(products);
//     } else {
//       console.error(
//         "Failed to fetch products:",
//         products.error || "Unknown error"
//       );
//     }
//   } catch (err) {
//     console.error("Failed to load products:", err);
//   }
// }

// // Function to display products in the UI
// function displayProducts(products) {
//   const container = document.getElementById("product-list");
//   container.innerHTML = ""; // Clear previous content

//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     card.innerHTML = `
//       <p>${product.category}</p>
//       <img src="${product.image}" alt="${product.name}" />
//       <h3>${product.name}</h3>
//       <p>${product.description.replace(/\n/g, "<br>")}</p>
//       <p>₦${product.price.toLocaleString()}</p>
//       <button onclick='addToCart(${JSON.stringify(
//         product
//       )})'>Add to Cart</button>
//     `;

//     container.appendChild(card);
//   });
// }

// // Function to add product to the cart
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const exists = cart.find((p) => p._id === product._id);

//   if (exists) {
//     alert("This product is already in your cart!");
//     return;
//   }

//   cart.push({ ...product, quantity: 1 });

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("✅ Product added to cart!");
// }

// // Category filtering functionality with tracking of new posts
// document.getElementById("category-filter").addEventListener("input", (e) => {
//   const input = e.target.value.trim().toLowerCase();
//   const selectedCategory = input.replace(/\s\(\d+ new\)/, ""); // Remove 'new' count from input

//   if (!input || input === "all") {
//     displayProducts(allProducts);
//     return;
//   }

//   const filtered = allProducts.filter((product) =>
//     product.category.toLowerCase().includes(selectedCategory.toLowerCase())
//   );

//   displayProducts(filtered);

//   // Reset new post count when category is viewed
//   const newCounts = JSON.parse(localStorage.getItem("newCategoryCounts") || "{}");

//   if (newCounts[selectedCategory]) {
//     delete newCounts[selectedCategory]; // Remove the new count
//     localStorage.setItem("newCategoryCounts", JSON.stringify(newCounts));
//     populateCategoryList(); // Refresh category list
//   }
// });

// // Function to increment new post count when a new product is added
// function incrementNewCategoryCount(category) {
//   const newCounts = JSON.parse(localStorage.getItem("newCategoryCounts") || "{}");

//   if (newCounts[category]) {
//     newCounts[category]++;
//   } else {
//     newCounts[category] = 1;
//   }

//   localStorage.setItem("newCategoryCounts", JSON.stringify(newCounts));
//   populateCategoryList(); // Update category list display with new counts
// }

// // To simulate adding a new product, call incrementNewCategoryCount when a new product is added
// // Example: incrementNewCategoryCount('Electronics');

// // frontend/public/js/index.js

// let allProducts = [];
// let allCategories = new Set(); // Use a Set to keep categories unique

// // Function to update the category list with product counts
// function populateCategoryList() {
//   const categoryList = document.getElementById("category-list");
//   categoryList.innerHTML = "";

//   // Retrieve stored product counts from localStorage
//   const productCounts = JSON.parse(localStorage.getItem("categoryProductCounts") || "{}");

//   allCategories.forEach((category) => {
//     const option = document.createElement("option");
//     const count = productCounts[category] || 0;
//     option.value = `${category} (${count} products)`; // Show number of products in the category
//     categoryList.appendChild(option);
//   });
// }

// // Function to fetch and load products
// document.addEventListener("DOMContentLoaded", () => {
//   fetchProducts();
// });

// // Function to fetch products from the API
// async function fetchProducts() {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await fetch("http://localhost:8000/api/products", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const products = await res.json();

//     if (res.ok) {
//       allProducts = products;

//       // Collect unique categories and their product counts
//       let categoryCounts = {};

//       products.forEach((product) => {
//         if (product.category) {
//           allCategories.add(product.category);
//           categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
//         }
//       });

//       allCategories = new Set(["All", ...allCategories]); // Add "All" at the start

//       // Store the product counts for each category
//       localStorage.setItem("categoryProductCounts", JSON.stringify(categoryCounts));

//       populateCategoryList(); // Fill category list
//       displayProducts(products);
//     } else {
//       console.error(
//         "Failed to fetch products:",
//         products.error || "Unknown error"
//       );
//     }
//   } catch (err) {
//     console.error("Failed to load products:", err);
//   }
// }

// // Function to display products in the UI
// function displayProducts(products) {
//   const container = document.getElementById("product-list");
//   container.innerHTML = ""; // Clear previous content

//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     card.innerHTML = `
//       <p>${product.category}</p>
//       <img src="${product.image}" alt="${product.name}" />
//       <h3>${product.name}</h3>
//       <p>${product.description.replace(/\n/g, "<br>")}</p>
//       <p>₦${product.price.toLocaleString()}</p>
//       <button onclick='addToCart(${JSON.stringify(
//         product
//       )})'>Add to Cart</button>
//     `;

//     container.appendChild(card);
//   });
// }

// // Function to add product to the cart
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const exists = cart.find((p) => p._id === product._id);

//   if (exists) {
//     alert("This product is already in your cart!");
//     return;
//   }

//   cart.push({ ...product, quantity: 1 });

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("✅ Product added to cart!");
// }

// // Category filtering functionality with product count
// document.getElementById("category-filter").addEventListener("input", (e) => {
//   const input = e.target.value.trim().toLowerCase();
//   const selectedCategory = input.replace(/\s\(\d+ products\)/, ""); // Remove 'products' count from input

//   if (!input || input === "all") {
//     displayProducts(allProducts);
//     return;
//   }

//   const filtered = allProducts.filter((product) =>
//     product.category.toLowerCase().includes(selectedCategory.toLowerCase())
//   );

//   displayProducts(filtered);

//   // After category is viewed, reset any 'new' count if applicable
//   const productCounts = JSON.parse(localStorage.getItem("categoryProductCounts") || "{}");

//   if (productCounts[selectedCategory]) {
//     populateCategoryList(); // Refresh the category list, no need to reset product count
//   }
// });

// // Function to increment new post count when a new product is added (if needed)
// function incrementNewCategoryCount(category) {
//   const productCounts = JSON.parse(localStorage.getItem("categoryProductCounts") || "{}");

//   if (productCounts[category]) {
//     productCounts[category]++;
//   } else {
//     productCounts[category] = 1;
//   }

//   localStorage.setItem("categoryProductCounts", JSON.stringify(productCounts));
//   populateCategoryList(); // Update category list display with new counts
// }

// // To simulate adding a new product, call incrementNewCategoryCount when a new product is added
// // Example: incrementNewCategoryCount('Electronics');

// // frontend/public/js/index.js

// let allProducts = [];
// let allCategories = new Set(); // Use a Set to keep categories unique

// // Function to update the category list with product counts (no "new" tag)
// function populateCategoryList() {
//   const categoryList = document.getElementById("category-list");
//   categoryList.innerHTML = "";

//   // Retrieve stored product counts from localStorage
//   const productCounts = JSON.parse(localStorage.getItem("categoryProductCounts") || "{}");

//   allCategories.forEach((category) => {
//     const option = document.createElement("option");
//     const count = productCounts[category] || 0;
//     option.value = `${category} (${count} products)`; // Show number of products in the category
//     categoryList.appendChild(option);
//   });
// }

// // Function to fetch and load products
// document.addEventListener("DOMContentLoaded", () => {
//   fetchProducts();
// });

// // Function to fetch products from the API
// async function fetchProducts() {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await fetch("http://localhost:8000/api/products", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const products = await res.json();

//     if (res.ok) {
//       allProducts = products;

//       // Collect unique categories and their product counts
//       let categoryCounts = {};

//       products.forEach((product) => {
//         if (product.category) {
//           allCategories.add(product.category);
//           categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
//         }
//       });

//       allCategories = new Set(["All", ...allCategories]); // Add "All" at the start

//       // Store the product counts for each category
//       localStorage.setItem("categoryProductCounts", JSON.stringify(categoryCounts));

//       populateCategoryList(); // Fill category list
//       displayProducts(products);
//     } else {
//       console.error(
//         "Failed to fetch products:",
//         products.error || "Unknown error"
//       );
//     }
//   } catch (err) {
//     console.error("Failed to load products:", err);
//   }
// }

// // Function to display products in the UI
// function displayProducts(products) {
//   const container = document.getElementById("product-list");
//   container.innerHTML = ""; // Clear previous content

//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     card.innerHTML = `
//       <p>${product.category}</p>
//       <img src="${product.image}" alt="${product.name}" />
//       <h3>${product.name}</h3>
//       <p>${product.description.replace(/\n/g, "<br>")}</p>
//       <p>₦${product.price.toLocaleString()}</p>
//       <button onclick='addToCart(${JSON.stringify(
//         product
//       )})'>Add to Cart</button>
//     `;

//     container.appendChild(card);
//   });
// }

// // Function to add product to the cart
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const exists = cart.find((p) => p._id === product._id);

//   if (exists) {
//     alert("This product is already in your cart!");
//     return;
//   }

//   cart.push({ ...product, quantity: 1 });

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("✅ Product added to cart!");
// }

// // Category filtering functionality with product count
// document.getElementById("category-filter").addEventListener("input", (e) => {
//   const input = e.target.value.trim().toLowerCase();
//   const selectedCategory = input.replace(/\s\(\d+ products\)/, ""); // Remove 'products' count from input

//   if (!input || input === "all") {
//     displayProducts(allProducts);
//     return;
//   }

//   const filtered = allProducts.filter((product) =>
//     product.category.toLowerCase().includes(selectedCategory.toLowerCase())
//   );

//   displayProducts(filtered);
// });

// // To simulate adding a new product, call incrementNewCategoryCount when a new product is added
// // Example: incrementNewCategoryCount('Electronics');

// frontend/public/js/index.js

// Function to show the loading modal
function showLoadingModal(message = "Processing...") {
  const modal = document.getElementById("loading-modal");
  const modalMessage = document.getElementById("modal-message");

  modalMessage.textContent = message;
  modal.style.display = "flex"; // Show the modal
}

// Function to hide the loading modal
function hideLoadingModal() {
  const modal = document.getElementById("loading-modal");
  modal.style.display = "none"; // Hide the modal
}

// Function to show a success message in the modal
function showSuccessModal(message = "Operation Successful!") {
  showLoadingModal(message);
  setTimeout(() => hideLoadingModal(), 2000); // Hide after 2 seconds
}

// Function to show an error message in the modal
function showErrorModal(message = "Something went wrong!") {
  showLoadingModal(message);
  setTimeout(() => hideLoadingModal(), 2000); // Hide after 2 seconds
}

let allProducts = [];
let allCategories = new Set(); // Use a Set to keep categories unique

// Function to update the category list with product counts (including "All" count)
function populateCategoryList() {
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = "";

  // Retrieve stored product counts from localStorage
  const productCounts = JSON.parse(
    localStorage.getItem("categoryProductCounts") || "{}"
  );

  // Calculate total count of products across all categories
  const totalProducts = allProducts.length;

  // Add the "All" option with the total number of products
  const allOption = document.createElement("option");
  allOption.value = `All (${totalProducts} products)`; // Show the total count of all products
  categoryList.appendChild(allOption);

  // Add the rest of the categories with their product counts
  allCategories.forEach((category) => {
    const option = document.createElement("option");
    const count = productCounts[category] || 0;
    option.value = `${category} (${count} products)`; // Show number of products in the category
    categoryList.appendChild(option);
  });
}

// Function to fetch and load products
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

// Function to fetch products from the API
async function fetchProducts() {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(
      "https://style-haven-backend.onrender.com/api/products",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const products = await res.json();

    if (res.ok) {
      allProducts = products;

      // Collect unique categories and their product counts
      let categoryCounts = {};

      products.forEach((product) => {
        if (product.category) {
          allCategories.add(product.category);
          categoryCounts[product.category] =
            (categoryCounts[product.category] || 0) + 1;
        }
      });

      //   allCategories = new Set(["All", ...allCategories]); // Add "All" at the start

      // Store the product counts for each category
      localStorage.setItem(
        "categoryProductCounts",
        JSON.stringify(categoryCounts)
      );

      populateCategoryList(); // Fill category list
      displayProducts(products);
      cleanUpDeletedProductsFromCart(); // <-- add this
    } else {
      console.error(
        "Failed to fetch products:",
        products.error || "Unknown error"
      );
    }
  } catch (err) {
    console.error("Failed to load products:", err);
  }
}

function cleanUpDeletedProductsFromCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Get all valid product IDs from allProducts
  const validIds = new Set(allProducts.map((p) => p._id));

  // Filter the cart, keeping only products that still exist
  const updatedCart = cart.filter((item) => validIds.has(item._id));

  if (updatedCart.length !== cart.length) {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("🧹 Cart cleaned: removed deleted products");
  }
}

// Function to display products in the UI
function displayProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    /* card.innerHTML = `
      <p>${product.category}</p>
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description.replace(/\n/g, "<br>")}</p>
      <p>₦${product.price.toLocaleString()}</p>
      <button onclick='addToCart(${JSON.stringify(
        product
      )})'>Add to Cart</button>
    `;*/

    card.innerHTML = `
       <p class="product-category">${product.category}</p>
        <a href="${product.image}" data-lightbox="post-gallery">
  <img src="${product.image}" alt="${product.name}" />
  </a>
  <h3 class="product-title">${product.name}</h3>
  <p class="product-description">${product.description.replace(
    /\n/g,
    "<br>"
  )}</p>
  <p class="product-price">₦${product.price.toLocaleString()}</p>
  <button class="add-to-cart" onclick='addToCart(${JSON.stringify(
    product
  )})'>Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// Function to add product to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find((p) => p._id === product._id);

  if (exists) {
    showSuccessModal("This product is already in your cart!");
    // Redirect after 3 seconds (same as modal delay)
    setTimeout(() => 3000);
    return;
  }

  cart.push({ ...product, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));

  showSuccessModal("✅ Product added to cart!");
  // Redirect after 3 seconds (same as modal delay)
  setTimeout(() => 3000);
}

// Category filtering functionality with product count
document.getElementById("category-filter").addEventListener("input", (e) => {
  const input = e.target.value.trim().toLowerCase();
  const selectedCategory = input.replace(/\s\(\d+ products\)/, ""); // Remove 'products' count from input

  if (!input || input === "all") {
    displayProducts(allProducts);
    return;
  }

  const filtered = allProducts.filter((product) =>
    product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  displayProducts(filtered);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  document.querySelector(".slides").style.transform = `translateX(-${
    index * 100
  }%)`;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
  let nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
}, 9000);

// To simulate adding a new product, call incrementNewCategoryCount when a new product is added
// Example: incrementNewCategoryCount('Electronics');
