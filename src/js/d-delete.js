const BASE_URL = "http://localhost:4040";

function removeBook(bookId) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options);
}

// removeBook(12)
// removeBook(5)

// ======================================
// async/await

// async function removeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`;
//   const options = {
//     method: "DELETE",
//   };
//   const response = await fetch(url, options);
//   return response;
// =====

// === если бек возвращает ответ
// const response = await fetch(url, options);
// const book = await response.json()
//   return book;
// ====
// }
