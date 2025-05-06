/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

// Initial dataset
const products = [ 
  { name: "Laptop", price: 1000, inStock: true }, 
  { name: "Phone", price: 500, inStock: false }, 
  { name: "Tablet", price: 800, inStock: true }, 
  { name: "Monitor", price: 300, inStock: true }, 
  { name: "Keyboard", price: 100, inStock: false }, 
];

// 1. Filter Products by Availability or Any Condition
function filterProducts(callback) {
  return products.filter(callback);
}

// Example: Filter products that are in stock
const inStockProducts = filterProducts(product => product.inStock);
console.log("In-Stock Products:", inStockProducts);

// Example: Filter products above $500
const expensiveProducts = filterProducts(product => product.price > 500);
console.log("Expensive Products (> $500):", expensiveProducts);

// 2. Transform Product Names to Uppercase
const uppercasedProductNames = products.map(product => product.name.toUpperCase());
console.log("Uppercased Product Names:", uppercasedProductNames);

// 3. Generate Discounted Prices
function applyDiscount(discountPercent) {
  return function(product) {
      return {
          ...product,
          price: +(product.price - (product.price * discountPercent / 100)).toFixed(2)
      };
  };
}

// Apply 20% discount
const discount20 = applyDiscount(20);
const discountedProducts = products.map(discount20);
console.log("Discounted Products (20% Off):", discountedProducts);

// 4. Calculate Total Inventory Value (for in-stock products)
const totalInventoryValue = products
  .filter(product => product.inStock)
  .reduce((sum, product) => sum + product.price, 0);
console.log("Total Value of In-Stock Inventory: $", totalInventoryValue);
