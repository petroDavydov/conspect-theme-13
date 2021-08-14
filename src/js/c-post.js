const BASE_URL = "http://localhost:4040";

function addBook(book) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then((res) => res.json());
}

addBook({
  title: "Right now",
  author: "Right now",
  generes: ["Right now"],
  raiting: 30,
}).then(renderBook);

addBook({
  title: "About then",
  author: "About then",
  generes: ["About then"],
  raiting: 33,
}).then(renderBook);

function renderBook(book) {
  console.log("You receive answer from backend, you can work now");
  console.log(book);
}
