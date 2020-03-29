const library = [
  {title: "Masters of Doom", author: 'David Kushner', isRead: 'Yes', rating: 9.5, index: 0},
  {title: "Blink", author: 'Malcolm Gladwell', isRead: 'Yes', rating: 9, index: 1},
  {title: "The Power of Unreasonable People", author: 'John Elkington & Pamela Harington	', isRead: 'No', rating: 5, index:2},
];

const container = document.querySelector(".container");
const table = document.querySelector(".table");
const addBookButton = document.getElementById("popupButton");

var title = document.getElementById("bookTitle")
var author = document.getElementById("bookAuthor")
var isRead = document.getElementById("readCheck")
var rating = document.getElementById("bookRating")

function Book(title, author, isRead, rating) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
  this.rating = rating ;
}

Book.prototype.info = function() {
  return this.title + ", " + this.numPages + ", " + this.rating + "/10";
}

function addBookToLibrary() {
  title = document.getElementById("bookTitle").value
  author = document.getElementById("bookAuthor").value
  if (document.getElementById("readCheck").checked = true) {
    isRead = "Yes";
  }
  else {
    isRead = "No";
  }
  rating = document.getElementById("bookRating").value
  const book = new Book(title, author, isRead, rating);
  book.index = library.length
  library.push(book);
  render(book)
  title.value = "";
  author.value = "";
  isRead.value = "";
  rating.value = "";
}

function render(book)
{
    table.innerHTML += `<tr id = ${book.index}><td>${book.title}</td>
    <td>${book.author}</td>
    <td><button onclick = "toggleRead(this)" class = "btn btn-secondary btn-sm">${book.isRead}</button></td>
    <td>${book.rating}</td>
    <td><button class="btn btn-danger" id=${book.index} onClick = "removeBook(this.id)" type = "button">Remove</button>
    </td></tr>`;
}

function removeBook(bookId){
  document.getElementById(bookId).innerHTML = "";
  library.splice(bookId, 1);
}

function toggleRead(thisBook) {
  if (thisBook.textContent === "Yes") {
    thisBook.textContent = "No";
  }
  else if (thisBook.textContent === "No")  {
    thisBook.textContent = "Yes";
  }
}