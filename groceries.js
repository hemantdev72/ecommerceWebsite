const bar = document.querySelector('.fa-bars');
const navBar = document.getElementById('nav-bar');
const cross = document.getElementById('cross');
import products from './data.js';

bar.addEventListener('click', () => {
  console.log('click');
  navBar.style.width = '80vw';
});

cross.addEventListener('click', () => {
  console.log('click');
  navBar.style.width = '0';
});

const productsPerPage = 9;
let currentPage = 1;
const productsItems = document.getElementById('groceries-items');
const pagination = document.getElementById('groceries-pagination');
let clutter = '';
const groceriesData = products.find(category => category.category === 'groceries').items;
const totalPages = Math.ceil(groceriesData.length / productsPerPage);

function displayGroceriesProducts(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = pageNumber * productsPerPage;
  const displayedProducts = groceriesData.slice(startIndex, endIndex);

  productsItems.innerHTML = ''; // Clear previous products

  displayedProducts.forEach(product => {
    const clutter = `
      <div id="product-item" class="item">
        <img src="${product.img}" alt="">
        <p>${product.category}</p>
        <h2 id="item-name" class="product-name">${product.name}</h2>
        <p id="star" class="product-rating">⭐⭐⭐⭐⭐</p>
        <p id="price" class "product-price">${product.price}</p>
      </div>`;
    productsItems.innerHTML += clutter;
  });
}

// Function to generate groceries-specific pagination buttons
function generateGroceriesPaginationButtons() {
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      displayGroceriesProducts(currentPage);
    });
    pagination.appendChild(button);
  }
}

// Initial display
displayGroceriesProducts(currentPage);
generateGroceriesPaginationButtons();
