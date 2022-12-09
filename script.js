const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
let API = "https://api.quotable.io/random";

btn.onclick = () => {
  getQuote();
};

function getQuote() {
  fetch(API)
    .then((response) => response.json())

    .then(function (i) {
      console.log(i);
      quote.innerHTML = `<p class="quote-text">${i.content}</p><span></span>
      <h2 class="quote-author">${i.author}<h2>
      `;
    });
}

window.onload(getQuote());
