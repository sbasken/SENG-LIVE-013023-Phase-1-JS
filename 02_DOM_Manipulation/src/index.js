//BookStore has been moved to data.js 
console.log(bookStore);
const bookList = document.querySelector("#book-list");

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

function renderHeader(bookStore) {
  // find the element and assign its text property
  document.querySelector('#store-name').textContent = bookStore.name
}

renderHeader(bookStore)

function renderFooter(bookStore) {
 document.querySelector('#location').textContent = bookStore.location
 document.querySelector('#number').textContent = bookStore.number
 document.querySelector('#address').textContent = bookStore.address
 document.querySelector('#hours').textContent = bookStore.hours

}

renderFooter(bookStore)

// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!


function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>
  const li = document.createElement('li');
  li.className = "list-li";

  const h3 = document.createElement('h3');
  h3.textContent = book.title
  li.append(h3)
  const pAuthor = document.createElement('p')
  pAuthor.textContent = book.author
  li.append(pAuthor)

  const pPrice = document.createElement('p')
  pPrice.textContent = formatPrice(book.price)
  li.append(pPrice)

  const img = document.createElement('img')
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`
  li.append(img)

  const btn = document.createElement('button');
  btn.textContent = "Delete"
  li.append(btn)

  bookList.append(li);
}

// for testing
// const book = bookStore.inventory[0]
// renderBook(book)

bookStore.inventory.forEach(book => {
  renderBook(book)
})
  