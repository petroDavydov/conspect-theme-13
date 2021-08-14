const BASE_URL = "http://localhost:4040";

function updateBookById(update, bookId) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };
  fetch(`${BASE_URL}/books/${bookId}`, options)
    .then((res) => res.json())
    .then(console.log);
}
updateBookById({ title: "Return to the future" }, 11);
updateBookById({ author: "Miamoto Musashi" }, 10);
updateBookById({ raiting: 38, author: "Bob Marly" }, 9);
