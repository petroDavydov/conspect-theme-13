const BASE_URL = "http://localhost:4040";

function removeBook(bookId) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options);
}

// removeBook(12)
// removeBook(5)