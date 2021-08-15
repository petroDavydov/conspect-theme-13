const BASE_URL = "http://localhost:4040";

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then((res) => res.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then((res) => res.json());
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);
// ===================
// async/await

// async function fetchBooks() {
//   const response = await fetch(`${BASE_URL}/books/`);
//   const books = await response.json();
//   return books;
// }
