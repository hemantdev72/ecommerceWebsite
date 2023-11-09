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
const productsItems = document.getElementById('product-items');
const pagination = document.getElementById('pagination');
let clutter = '';
const groceriesData = products.find(category => category.category === 'groceries').items;
const juiceData = products.find(category => category.category === 'juice').items;
const combinedData = [...groceriesData, ...juiceData];
const totalPages = Math.ceil(combinedData.length / productsPerPage);

function displayProducts(pageNumber) {
  
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = pageNumber * productsPerPage;
  const displayedProducts = combinedData.slice(startIndex, endIndex);

  productsItems.innerHTML = ''; // Clear previous products

  displayedProducts.forEach(product => {
    const clutter = `
      <div id="product-item" class="item">
        <img src="${product.img}" alt="">
        <p>${product.category}</p>
        <h2 id="item-name" class="product-name">${product.name}</h2>
        <p id="star" class="product-rating">⭐⭐⭐⭐⭐</p>
        <p id="price" class="product-price">${product.price}</p>
      </div>`;
    productsItems.innerHTML += clutter;
  });
}

// Function to generate pagination buttons
function generatePaginationButtons() {
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      displayProducts(currentPage);
    });
    pagination.appendChild(button);
  }
}



// Initial display
displayProducts(currentPage);
generatePaginationButtons();
