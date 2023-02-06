const bookList = document.querySelector('#book-list');
const bookForm = document.querySelector('#book-form');
const toggleBookForm = document.querySelector('#toggleForm')


function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

// helper function
function fillIn(form, data) {
  form.title.value = data.title;
  form.author.value = data.author;
  form.price.value = data.price;
  form.inventory.value = data.inventory;
  form.imageUrl.value = data.imageUrl;
}

fillIn(bookForm, {
  title: "Designing Data-Intensive Applications",
  author: "Martin Kleppmann",
  price: 22,
  imageUrl: "https://img.thriftbooks.com/api/images/i/m/0F0215CB69CC543433186FF1D4C95DD17CF6B955.jpg",
  inventory: 5

})

//////////////////////////////////////
// render functions  (Data => Display)
//////////////////////////////////////

// create a function renderHeader() that takes the store name from bookStore and adds to the DOM
function renderHeader(bookStore) {
  document.querySelector('#store-name').textContent = bookStore.name;
}

function renderFooter(bookStore) {
  document.querySelector('#location').textContent = bookStore.location;
  document.querySelector('#number').textContent = bookStore.number;
  document.querySelector('#address').textContent = bookStore.address;
  document.querySelector('#hours').textContent = bookStore.hours;
}

// function: renderBook(book)
// --------------------------
// accepts a book object as an argument and creates
// an li something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
// </li>
// appends the li to the ul#book-list in the DOM
function renderBook(book) {
    
  const li = document.createElement('li');
  li.className = 'list-li';
  
  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  li.append(h3);

  const pAuthor = document.createElement('p');
  pAuthor.textContent = book.author;
  li.append(pAuthor);
  
  const pPrice = document.createElement('p');
  pPrice.textContent = formatPrice(book.price);
  li.append(pPrice);
  
  const img = document.createElement('img');
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;
  img.title = `${book.title} cover`;
  li.append(img);

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  li.append(btn);

  btn.addEventListener('click', () => {
    li.remove()
  })

  bookList.append(li);
}


////////////////////////////////////////////
// call render functions to populate the DOM
////////////////////////////////////////////

renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(renderBook);


////////////////////////////////////////////
// eventlistener
////////////////////////////////////////////

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // renderBook expects an argument that looks like this;
  // {
  //   id:1,
  //   title: 'Eloquent JavaScript: A Modern Introduction to Programming',
  //   author: 'Marjin Haverbeke',
  //   price: 10.00,
  //   reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
  //   inventory: 10,
  //   imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  // }
  const newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: parseInt(e.target.price.value),
    review: [],
    inventory: parseInt(e.target.inventory.value),
    imgUrl: e.target.imageUrl.value,
  }
  renderBook(newBook)
})


//hide and show the book form when clicked

toggleBookForm.addEventListener('click', (e) => {
  const hidden = bookForm.classList.toggle('collapsed');
  if (hidden) {
    e.target.innerText = "Open Book Form"
  } else {
    e.target.innerText = "Hide Book Form"
  }
})

////////////////////////////////////////////
// 
////////////////////////////////////////////